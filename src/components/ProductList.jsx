import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  onFavorite,
  onDetail,
  favorites = [],
}) {
  if (!products?.length) {
    return (
      <div className="text-center text-gray-400 py-12 text-lg italic">
        Không có sản phẩm nào để hiển thị
      </div>
    );
  }

  return (
    <div
      className="
        grid gap-6 sm:gap-8
        grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3
        px-2 sm:px-0
      "
    >
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onFavorite={onFavorite}
          onDetail={onDetail}
          isFavorite={favorites.some((f) => f.id === p.id)}
        />
      ))}
    </div>
  );
}
