import { useState, useEffect } from "react";
import { fetchProducts, fetchSuggestions } from "../api/mockApi";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import PriceFilter from "../components/PriceFilter";
import Skeleton from "../components/Skeleton";
import Toast from "../components/Toast";
import ProductModal from "../components/ProductModal";

export default function Home({
  onAddFavorite,
  onRemoveFavorite,
  favorites,
  history,
  addToHistory,
}) {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(""); // "<500K", "500K-1M", ">1M"
  const [loading, setLoading] = useState(true);
  const [suggested, setSuggested] = useState([]);
  const [suggesting, setSuggesting] = useState(false);
  const [suggestError, setSuggestError] = useState("");
  const [toast, setToast] = useState("");

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
    setSuggestError("");
    setSuggested([]);
    try {
      const suggestions = await fetchSuggestions(
        1,
        favorites.map((p) => p.id),
        history.map((p) => p.id)
      );
      setSuggested(suggestions);
    } catch {
      setSuggestError("Không thể lấy gợi ý lúc này");
      setToast("Không thể lấy gợi ý lúc này");
      setTimeout(() => setToast(""), 1500);
    } finally {
      setSuggesting(false);
    }
  }

  function handleViewDetail(product) {
    setSelectedProduct(product);
    setShowModal(true);
    addToHistory(product);
  }

  function handleFavorite(product) {
    if (!favorites.some((f) => f.id === product.id)) {
      onAddFavorite(product);
      setToast("Đã thêm vào yêu thích!");
    } else {
      // Giả sử bạn đã truyền thêm hàm onRemoveFavorite từ App xuống Home
      onRemoveFavorite(product);
      setToast("Đã bỏ khỏi yêu thích!");
    }
    setTimeout(() => setToast(""), 1500);
  }
  

  return (
    <div className="max-w-4xl mx-auto p-2">
      <h1 className="text-3xl font-bold my-4 text-center">
        Sàn Giáo Dục TMĐT AI
      </h1>
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <SearchBar value={search} onChange={setSearch} />
        <PriceFilter value={filter} onChange={setFilter} />
        <button
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
          onClick={handleSuggest}
        >
          Gợi ý sản phẩm phù hợp
        </button>
      </div>
      {suggesting && <Skeleton />}
      {suggestError && <Toast msg={suggestError} />}
      {suggested.length > 0 && (
        <div className="mb-4">
          <h2 className="font-semibold mb-2">Sản phẩm được AI gợi ý:</h2>
          <ProductList
            products={suggested}
            onFavorite={handleFavorite}
            onDetail={handleViewDetail}
            favorites={favorites}
          />
        </div>
      )}
      <h2 className="font-semibold mb-2">Tất cả sản phẩm</h2>
      {loading ? (
        <Skeleton />
      ) : (
        <ProductList
          products={products.filter(filterProduct)}
          onFavorite={handleFavorite}
          onDetail={handleViewDetail}
          favorites={favorites}
        />
      )}

      {showModal && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setShowModal(false)}
        />
      )}
      {toast && <Toast msg={toast} />}
    </div>
  );
}
