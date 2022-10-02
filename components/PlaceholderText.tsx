export default function PlaceholderText() {
  return (
    <div className="flex-1 space-y-6 py-2">
      <div className="space-y-3">
        <div className="h-4 bg-neutral-300 rounded"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-4 bg-neutral-300 rounded col-span-2"></div>
          <div className="h-4 bg-neutral-300 rounded col-span-1"></div>
        </div>
        <div className="h-4 bg-neutral-300 rounded"></div>
      </div>
    </div>
  );
}
