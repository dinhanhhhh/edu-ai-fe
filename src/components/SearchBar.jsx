export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Tìm kiếm sản phẩm..."
      className="border rounded px-3 py-2 flex-1"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
