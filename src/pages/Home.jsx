import { useState, useEffect } from "react";
import { fetchProducts, fetchSuggestions } from "../api/mockApi";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import PriceFilter from "../components/PriceFilter";
import Skeleton from "../components/Skeleton";
import Toast from "../components/Toast";

export default function Home({
  onAddFavorite,
  onRemoveFavorite,
  favorites,
  history,
  onDetail,
}) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(""); // "<500K", "500K-1M", ">1M"
  const [loading, setLoading] = useState(true);
  const [suggested, setSuggested] = useState([]);
  const [suggesting, setSuggesting] = useState(false);
  const [toast, setToast] = useState(null);
  const [assistantPointer, setAssistantPointer] = useState(0);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  function filterProduct(p) {
    let ok = true;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()))
      ok = false;
    if (filter === "<500K" && p.price >= 500000) ok = false;
    if (filter === "500K-1M" && (p.price < 500000 || p.price > 1000000))
      ok = false;
    if (filter === ">1M" && p.price <= 1000000) ok = false;
    return ok;
  }

  async function handleSuggest() {
    setSuggesting(true);
    setSuggested([]);
    try {
      const suggestions = await fetchSuggestions(
        1,
        favorites.map((p) => p.id),
        history.map((p) => p.id)
      );
      setSuggested(suggestions);
      setAssistantPointer(0);
    } catch (error) {
      console.error(error);
      setToast({ type: "error", message: "Không thể lấy gợi ý lúc này" });
    } finally {
      setSuggesting(false);
    }
  }

  function handleViewDetail(product) {
    onDetail(product);
  }

  function handleFavorite(product) {
    if (!favorites.some((f) => f.id === product.id)) {
      onAddFavorite(product);
      setToast({ type: "success", message: "Đã thêm vào yêu thích!" });
    } else {
      onRemoveFavorite(product);
      setToast({ type: "info", message: "Đã bỏ khỏi yêu thích!" });
    }
  }

  useEffect(() => {
    if (!toast) return undefined;
    const timeoutId = setTimeout(() => setToast(null), 1800);
    return () => clearTimeout(timeoutId);
  }, [toast]);


  const heroStats = [
    { label: "Khoá học", value: "250+" },
    { label: "Mentor", value: "120+" },
    { label: "Học viên", value: "15K+" },
  ];

  useEffect(() => {
    setAssistantPointer(0);
  }, [products.length]);

  useEffect(() => {
    setAssistantPointer(0);
  }, [suggested.length]);

  const assistantPool =
    suggested.length > 0 ? suggested : products;
  const assistantProduct =
    assistantPool.length > 0
      ? assistantPool[assistantPointer % assistantPool.length]
      : null;

  function handleNextAssistant() {
    if (suggested.length > 0 || assistantPool.length > 1) {
      setAssistantPointer((prev) => prev + 1);
    } else if (!suggesting) {
      handleSuggest();
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-3 space-y-6">
      <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-emerald-900 p-6 text-white shadow-2xl">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs uppercase tracking-[0.3em] text-emerald-200">
          AI Powered Learning
        </p>
        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
          Khám phá khoá học yêu thích,
          <span className="text-emerald-300"> nhận gợi ý cá nhân hoá</span> chỉ
          trong vài giây.
        </h1>
        <p className="mt-3 text-base text-slate-200 max-w-2xl">
          Sàn giáo dục ứng dụng AI giúp bạn lọc hàng trăm khoá học, tài liệu số,
          kèm mentor thực chiến và ưu đãi độc quyền mỗi ngày.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            className="flex-1 rounded-2xl bg-white/90 px-5 py-3 text-slate-900 font-semibold shadow-xl shadow-emerald-500/40 hover:bg-white"
            onClick={handleSuggest}
            disabled={suggesting}
          >
            {suggesting ? "AI đang gợi ý..." : "Nhận gợi ý từ AI"}
          </button>
          <a
            href="#product-list"
            className="flex-1 rounded-2xl border border-white/40 px-5 py-3 text-center font-semibold hover:bg-white/10"
          >
            Khám phá ngay →
          </a>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {heroStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/10 py-3">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-slate-200">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="rounded-3xl bg-white/80 p-4 shadow-xl backdrop-blur border border-white/40 flex flex-col gap-3 md:flex-row md:items-center">
        <SearchBar value={search} onChange={setSearch} />
        <PriceFilter value={filter} onChange={setFilter} />
        <button
          className={`rounded-2xl px-4 py-3 text-white font-semibold transition flex items-center justify-center gap-2 ${
            suggesting ? "bg-indigo-300 cursor-not-allowed" : "bg-indigo-500 hover:bg-indigo-600"
          }`}
          onClick={handleSuggest}
          disabled={suggesting}
        >
          {suggesting ? (
            <>
              <span className="spinner" aria-hidden="true"></span>
              Đang gợi ý...
            </>
          ) : (
            <>
              🤖 Gợi ý AI
            </>
          )}
        </button>
      </div>
      {suggesting && <Skeleton />}
      {suggested.length > 0 && (
        <div className="rounded-3xl bg-white/90 p-4 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-lg">Gợi ý dành riêng cho bạn</h2>
            <span className="text-xs uppercase tracking-widest text-emerald-500">
              AI Suggestion
            </span>
          </div>
          <ProductList
            products={suggested}
            onFavorite={handleFavorite}
            onDetail={handleViewDetail}
            favorites={favorites}
            emptyMessage="Chưa có gợi ý nào"
          />
        </div>
      )}

      <section id="product-list" className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Tất cả sản phẩm
            </h2>
            <p className="text-sm text-slate-500">
              Lọc theo từ khoá hoặc giá để tìm đúng nhu cầu của bạn
            </p>
          </div>
        </div>

        {loading ? (
          <Skeleton />
        ) : (
          <ProductList
            products={products.filter(filterProduct)}
            onFavorite={handleFavorite}
            onDetail={handleViewDetail}
            favorites={favorites}
            emptyMessage="Không tìm thấy sản phẩm khớp bộ lọc"
          />
        )}
      </section>

      {assistantProduct && (
        <aside className="fixed bottom-4 left-4 max-w-sm rounded-3xl bg-white/90 p-4 shadow-2xl border border-white/50 z-40 hidden sm:flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">
            🤝 AI Mentor
          </div>
          <p className="text-sm text-slate-600">
            AI chọn cho bạn:{" "}
            <span className="font-semibold text-slate-900">
              {assistantProduct.name}
            </span>
          </p>
          <div className="flex items-center gap-3">
            <button
              className="flex-1 rounded-2xl bg-emerald-500/90 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-500 transition"
              onClick={() => handleViewDetail(assistantProduct)}
            >
              Xem ngay
            </button>
            <button
              className="rounded-2xl border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
              onClick={handleNextAssistant}
            >
              Gợi ý khác
            </button>
          </div>
        </aside>
      )}

      {toast && <Toast msg={toast.message} type={toast.type} />}
    </div>
  );
}
