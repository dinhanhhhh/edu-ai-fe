export default function MainNav({
  page,
  setPage,
  favoritesCount,
  historyCount,
}) {
  // Gợi ý badge (số lượng) đẹp hơn
  function Badge({ count, color = "bg-gray-300" }) {
    if (!count) return null;
    return (
      <span
        className={`ml-2 px-2 py-0.5 rounded-full text-xs text-white ${color}`}
      >
        {count}
      </span>
    );
  }

  // Tạo array menu để code gọn, dễ mở rộng
  const navItems = [
    {
      label: "Trang chủ",
      key: "home",
      color: "text-blue-600",
      underline: "border-blue-500",
      icon: "🏠",
    },
    {
      label: "Yêu thích",
      key: "favorites",
      color: "text-pink-500",
      underline: "border-pink-400",
      icon: "❤️",
      badge: <Badge count={favoritesCount} color="bg-pink-500" />,
    },
    {
      label: "Lịch sử xem",
      key: "history",
      color: "text-emerald-600",
      underline: "border-emerald-400",
      icon: "🕓",
      badge: <Badge count={historyCount} color="bg-emerald-600" />,
    },
  ];

  return (
    <nav className="bg-white/80 shadow-lg rounded-b-xl px-6 py-3 flex gap-2 sm:gap-6 items-center justify-center sticky top-0 z-40 backdrop-blur-md">
      {navItems.map((item) => (
        <button
          key={item.key}
          onClick={() => setPage(item.key)}
          className={
            "relative px-4 py-2 font-medium rounded-full flex items-center gap-1 transition " +
            (page === item.key
              ? `${item.color} bg-gray-100 shadow border-b-2 ${item.underline} scale-105`
              : "text-gray-700 hover:bg-gray-50 hover:scale-105")
          }
          style={{
            minWidth: 90,
            letterSpacing: "0.02em",
          }}
        >
          <span className="text-lg mr-1">{item.icon}</span>
          {item.label}
          {item.badge}
          {page === item.key && (
            <span
              className={`absolute -bottom-1 left-4 right-4 h-1 rounded-full ${item.underline}`}
            ></span>
          )}
        </button>
      ))}
    </nav>
  );
}
