import AdBanner from './AdBanner';

export default function Sidebar() {
  return (
    <aside className="hidden lg:block lg:w-64 lg:flex-shrink-0">
      <div className="sticky top-20 space-y-6">
        {/* Ad Banner 1 */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <div className="text-xs text-gray-500 mb-2 text-center">Advertisement</div>
          <AdBanner />
        </div>

        {/* Ad Banner 2 */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <div className="text-xs text-gray-500 mb-2 text-center">Advertisement</div>
          <AdBanner />
        </div>
      </div>
    </aside>
  );
}

