export default function Toast({ msg }) {
  return (
    <div className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded shadow-lg z-50 animate-bounce">
      {msg}
    </div>
  );
}
