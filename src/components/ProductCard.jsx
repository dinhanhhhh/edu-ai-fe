export default function ProductCard({
  product,
  onFavorite,
  onDetail,
  isFavorite,
}) {
  return (
    <div
      className="
        border rounded-2xl shadow-lg p-4 bg-white/90
        flex flex-col gap-3
        transition-all duration-200
        hover:shadow-2xl hover:-translate-y-1 hover:bg-blue-50
        group relative w-full
      "
    >
      <div className="absolute left-4 top-4 flex gap-2 z-10">
        <span className="bg-yellow-400/90 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow flex items-center gap-1">
          ⭐ {product.rating || "4.5"}
        </span>
        {product.price < 200000 && (
          <span className="bg-green-500/90 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
            Ưu đãi
          </span>
        )}
      </div>
      {/* Giữ tỷ lệ ảnh cố định với util mới của Tailwind 4 */}
      <div className="aspect-[16/9] overflow-hidden rounded-xl shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition duration-200"
        />
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="font-bold text-base sm:text-lg md:text-xl truncate">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
          {product.shortDesc}
        </p>
        <div className="font-bold text-blue-600 mt-2 text-base md:text-lg">
          {product.price.toLocaleString()}đ
        </div>
      </div>
      <div className="flex gap-2 mt-auto">
        <button
          className="flex-1 bg-orange-500 text-white py-1.5 px-2 sm:px-3 rounded-lg font-medium hover:bg-orange-600 transition-all text-sm sm:text-base"
          onClick={() => onDetail(product)}
        >
          Xem chi tiết
        </button>
        <button
          className={`flex-1 px-2 sm:px-3 py-1.5 rounded-lg font-medium text-sm sm:text-base transition-all
            ${
              isFavorite
                ? "bg-pink-500 text-white hover:bg-pink-600"
                : "bg-gray-100 text-gray-700 hover:bg-pink-100"
            }
          `}
          onClick={() => onFavorite(product)}
        >
          {isFavorite ? "Đã thích" : "Yêu thích"}
        </button>
      </div>
    </div>
  );
}
