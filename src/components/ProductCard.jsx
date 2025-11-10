export default function ProductCard({
  product,
  onFavorite,
  onDetail,
  isFavorite,
}) {
  const isHot = product.rating >= 4.8;
  const isDeal = product.price < 400000;
  const tier =
    product.price > 1000000 ? "Premium" : product.price > 600000 ? "Popular" : "Starter";

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/90 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group flex flex-col"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-emerald-200/30 opacity-0 group-hover:opacity-100 pointer-events-none transition"></div>

      <div className="absolute left-4 top-4 flex flex-wrap gap-2 z-10">
        {isHot && (
          <span className="bg-rose-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
            🔥 Hot Pick
          </span>
        )}
        {isDeal && (
          <span className="bg-emerald-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
            ⚡ Ưu đãi
          </span>
        )}
        <span className="bg-slate-900/80 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
          {tier}
        </span>
      </div>

      <div className="aspect-[16/9] overflow-hidden rounded-3xl rounded-b-none relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent rounded-3xl pointer-events-none"></div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-lg font-bold text-slate-900 line-clamp-2">{product.name}</h3>
          <p className="mt-1 text-sm text-slate-500 line-clamp-2">{product.shortDesc}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-600">
          <div className="flex items-center gap-1 font-semibold text-blue-600 text-lg">
            {product.price.toLocaleString()}đ
          </div>
          <div className="flex items-center gap-1 text-amber-500 font-semibold">
            ⭐ {product.rating}
          </div>
        </div>

        <div className="flex gap-3 mt-auto">
          <button
            className="flex-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-white font-semibold shadow-lg shadow-blue-500/30 hover:brightness-110 transition"
            onClick={() => onDetail(product)}
          >
            Xem ngay
          </button>
          <button
            className={`flex items-center justify-center rounded-2xl px-3 py-2 font-semibold transition ${
              isFavorite
                ? "bg-pink-500 text-white shadow-md shadow-pink-400/40"
                : "bg-white text-slate-700 border border-pink-200 hover:bg-pink-50"
            }`}
            onClick={() => onFavorite(product)}
          >
            {isFavorite ? "Đã thích" : "Yêu thích"}
          </button>
        </div>
      </div>
    </div>
  );
}
