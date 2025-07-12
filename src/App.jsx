import { useState } from "react";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import History from "./pages/History";
import ProductModal from "./components/ProductModal";
import MainNav from "./components/MainNav"; // <-- Thêm dòng này

export default function App() {
  const [page, setPage] = useState("home");
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Thêm vào danh sách yêu thích
  function handleAddFavorite(product) {
    setFavorites((favs) =>
      favs.some((p) => p.id === product.id) ? favs : [...favs, product]
    );
  }
  // Bỏ khỏi yêu thích
  function handleRemoveFavorite(product) {
    setFavorites((favs) => favs.filter((p) => p.id !== product.id));
  }
  // Thêm vào lịch sử
  function handleAddToHistory(product) {
    setHistory((his) =>
      his.some((p) => p.id === product.id)
        ? his
        : [product, ...his].slice(0, 10)
    );
  }
  // Mở modal chi tiết
  function handleShowDetail(product) {
    setSelectedProduct(product);
    setShowModal(true);
    handleAddToHistory(product);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-700 via-indigo-900 to-black">
      {/* Sử dụng MainNav đã tách */}
      <MainNav
        page={page}
        setPage={setPage}
        favoritesCount={favorites.length}
        historyCount={history.length}
      />

      {page === "home" && (
        <Home
          onAddFavorite={handleAddFavorite}
          onRemoveFavorite={handleRemoveFavorite}
          favorites={favorites}
          history={history}
          addToHistory={handleAddToHistory}
          onDetail={handleShowDetail}
        />
      )}
      {page === "favorites" && (
        <Favorites
          favorites={favorites}
          onRemoveFavorite={handleRemoveFavorite}
          onDetail={handleShowDetail}
        />
      )}
      {page === "history" && (
        <History
          history={history}
          onAddFavorite={handleAddFavorite}
          onDetail={handleShowDetail}
          favorites={favorites}
        />
      )}
      {showModal && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
