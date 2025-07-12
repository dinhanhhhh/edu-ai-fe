export default function Skeleton({ count = 4 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-gray-200 rounded-xl h-52"
        ></div>
      ))}
    </div>
  );
}
