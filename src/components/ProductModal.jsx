export default function ProductModal({ product, onClose }) {
  if (!product) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
        bg-gradient-to-br from-black/70 via-black/50 to-emerald-900/70
        backdrop-blur-[3px] transition-all"
      onClick={onClose}
      aria-modal="true"
      tabIndex={-1}
    >
      <div
        className="
          bg-white rounded-2xl shadow-2xl p-4 sm:p-6 max-w-md w-[96vw] sm:w-full relative animate-fade-in
          flex flex-col
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nút đóng to, dễ bấm */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-2xl md:text-4xl text-gray-400 hover:text-red-500 rounded-full bg-white/90 hover:bg-gray-100 w-12 h-12 flex items-center justify-center transition shadow-lg"
          aria-label="Đóng"
        >
          &times;
        </button>

        {/* Ảnh sản phẩm lớn, responsive */}
        <div className="w-full h-44 sm:h-48 mb-3 rounded-xl overflow-hidden shadow-sm flex items-center justify-center bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl"
            loading="lazy"
          />
        </div>

        {/* Nội dung chi tiết */}
        <h2 className="font-bold text-2xl sm:text-3xl mb-2">{product.name}</h2>
        <div className="text-xl sm:text-2xl font-semibold text-blue-600 mb-1">
          {product.price.toLocaleString()}đ
        </div>
        <div className="text-base text-gray-700 mb-3">{product.longDesc}</div>
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-yellow-500 font-bold text-lg">
            {product.rating}⭐
          </span>
          <span className="text-sm text-gray-500">Đánh giá người dùng</span>
        </div>
      </div>
    </div>
  );
}
