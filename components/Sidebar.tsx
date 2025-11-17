export default function Sidebar() {
  return (
    <aside className="hidden lg:block lg:w-64 lg:flex-shrink-0">
      <div className="sticky top-20 space-y-6">
        {/* Ad Placeholder 1 */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
          <div className="text-sm text-gray-500 mb-2">Advertisement</div>
          <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-400 text-sm">Ad Space 300x250</span>
          </div>
        </div>

        {/* Ad Placeholder 2 */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
          <div className="text-sm text-gray-500 mb-2">Advertisement</div>
          <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-400 text-sm">Ad Space 300x250</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

