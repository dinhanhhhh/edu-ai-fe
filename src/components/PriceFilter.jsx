export default function PriceFilter({ value, onChange }) {
  return (
    <label className="relative flex items-center">
      <span className="absolute left-3 text-lg">💰</span>
      <select
        className="appearance-none rounded-2xl border border-white/30 bg-white/80 pl-10 pr-8 py-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-emerald-400"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Tất cả giá</option>
        <option value="<500K">&lt; 500K</option>
        <option value="500K-1M">500K–1 triệu</option>
        <option value=">1M">&gt; 1 triệu</option>
      </select>
      <span className="pointer-events-none absolute right-3 text-gray-500">
        ⌄
      </span>
    </label>
  );
}
