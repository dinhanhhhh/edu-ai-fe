import ProductList from "../components/ProductList";

export default function History({
  history,
  onAddFavorite,
  onDetail,
  favorites,
}) {
  return (
    <div className="max-w-4xl mx-auto p-2">
      <h2 className="font-semibold mb-4">Lịch sử xem sản phẩm</h2>
      <ProductList
        products={history}
        onFavorite={onAddFavorite}
        onDetail={onDetail}
        favorites={favorites}
      />
    </div>
  );
}
