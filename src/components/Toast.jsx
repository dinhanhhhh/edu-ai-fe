const TYPE_STYLES = {
  success: "bg-emerald-500",
  error: "bg-rose-500",
  info: "bg-slate-800",
};

export default function Toast({ msg, type = "info" }) {
  const bgClass = TYPE_STYLES[type] ?? TYPE_STYLES.info;
  return (
    <div
      className={`${bgClass} text-white px-4 py-2 rounded-xl shadow-2xl z-50 fixed bottom-6 right-6 flex items-center gap-2 animate-slide-up`}
    >
      {type === "success" && <span aria-hidden="true">✅</span>}
      {type === "error" && <span aria-hidden="true">⚠️</span>}
      {type === "info" && <span aria-hidden="true">ℹ️</span>}
      <span>{msg}</span>
    </div>
  );
}
