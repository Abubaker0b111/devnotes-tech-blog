export default function Loading() {
  const placeholders = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <div className="mb-8 h-10 w-48 animate-pulse rounded bg-slate-200" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {placeholders.map((item) => (
          <div key={item} className="h-72 animate-pulse rounded-xl bg-slate-200" />
        ))}
      </div>
    </div>
  );
}
