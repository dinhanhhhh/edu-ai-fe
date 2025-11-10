export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const highlights = [
    "Mentor đồng hành 1-1 trong suốt khóa",
    "Tài liệu, template cập nhật trọn đời",
    "Cộng đồng học viên > 5.000 người",
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/70 via-slate-900/70 to-emerald-900/60 backdrop-blur-md px-4"
      onClick={onClose}
      aria-modal="true"
      tabIndex={-1}
    >
      <article
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 h-11 w-11 rounded-full bg-white/80 text-3xl text-slate-500 shadow hover:bg-rose-100 hover:text-rose-600 transition"
          aria-label="Đóng"
        >
          &times;
        </button>

        <div className="relative h-56 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div className="absolute left-6 bottom-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-800 shadow">
              ⭐ {product.rating} • {product.price.toLocaleString()}đ
            </span>
          </div>
        </div>

        <div className="space-y-5 p-6 md:p-8">
          <header>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Khoá học nổi bật
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
              {product.name}
            </h2>
            <p className="mt-3 text-slate-600">{product.longDesc}</p>
          </header>

          <section className="rounded-2xl bg-slate-50 p-4">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
              Bạn nhận được
            </h3>
            <ul className="mt-3 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-emerald-500">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <footer className="flex flex-col gap-3 md:flex-row">
            <button
              className="flex-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-600 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-400/40 hover:brightness-110 transition"
              onClick={() => console.log("CTA mua ngay", product.id)}
            >
              Mua ngay • {product.price.toLocaleString()}đ
            </button>
            <button
              className="flex-1 rounded-2xl border border-slate-200 px-5 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 transition"
              onClick={onClose}
            >
              Xem sau
            </button>
          </footer>
        </div>
      </article>
    </div>
  );
}
