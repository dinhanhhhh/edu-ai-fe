export default function PriceFilter({ value, onChange }) {
  return (
    <select
      className="border rounded p-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Tất cả giá</option>
      <option value="<500K">&lt; 500K</option>
      <option value="500K-1M">500K–1 triệu</option>
      <option value=">1M">&gt; 1 triệu</option>
    </select>
  );
}
