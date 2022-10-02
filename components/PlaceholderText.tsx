export default function PlaceholderText() {
  return (
    <div className="flex-1 space-y-6 py-2">
      <div className="space-y-3">
        <div className="h-4 rounded bg-neutral-300"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 h-4 rounded bg-neutral-300"></div>
          <div className="col-span-1 h-4 rounded bg-neutral-300"></div>
        </div>
        <div className="h-4 rounded bg-neutral-300"></div>
      </div>
    </div>
  );
}
