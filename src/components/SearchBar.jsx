export default function SearchBar({ value, onChange }) {
  return (
    <label className="relative flex-1">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
        🔍
      </span>
      <input
        type="text"
        placeholder="Tìm kiếm khóa học, tài liệu..."
        className="w-full rounded-2xl border border-white/30 bg-white/80 pl-10 pr-3 py-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
