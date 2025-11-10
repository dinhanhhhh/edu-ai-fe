import ProductList from "../components/ProductList";

export default function Favorites({ favorites, onRemoveFavorite, onDetail }) {
  return (
    <div className="max-w-4xl mx-auto p-2">
      <h2 className="font-semibold mb-4">Sản phẩm yêu thích của bạn</h2>
      <ProductList
        products={favorites}
        onFavorite={onRemoveFavorite}
        onDetail={onDetail}
        favorites={favorites}
        emptyMessage="Bạn chưa lưu sản phẩm nào vào mục yêu thích"
      />
    </div>
  );
}
