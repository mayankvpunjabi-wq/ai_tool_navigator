import Link from 'next/link';
import type { Metadata } from 'next';
import { tools } from '../../data/tools';
import ToolCard from '../../components/ToolCard';
import Sidebar from '../../components/Sidebar';

export const metadata: Metadata = {
  title: 'Top AI Tools Lists - Best Rated Tools by Category',
  description: 'Curated lists of the best AI tools in each category, ranked by quality and user ratings.',
};

export default function TopListsPage() {
  const topWritingTools = tools
    .filter((tool) => tool.category === 'writing')
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 5);

  const topCodingTools = tools
    .filter((tool) => tool.category === 'coding')
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 5);

  const topImageTools = tools
    .filter((tool) => tool.category === 'image-generation')
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          <div className="flex-1">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Top AI Tools Lists
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Curated lists of the best AI tools in each category, ranked by quality and user ratings
              </p>
            </div>

            {/* Top Writing Tools */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Top Writing AI Tools
                  </h2>
                  <p className="text-gray-600">Best-rated writing and content creation tools</p>
                </div>
                <Link
                  href="/categories/writing"
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 transition-colors"
                >
                  View All
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {topWritingTools.map((tool, index) => (
                  <div key={tool.id} className="relative">
                    <div className="absolute -top-3 -left-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <ToolCard tool={tool} />
                  </div>
                ))}
              </div>
            </section>

            {/* Top Coding Tools */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Top Coding AI Tools
                  </h2>
                  <p className="text-gray-600">Best-rated developer and programming assistants</p>
                </div>
                <Link
                  href="/categories/coding"
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 transition-colors"
                >
                  View All
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {topCodingTools.map((tool, index) => (
                  <div key={tool.id} className="relative">
                    <div className="absolute -top-3 -left-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <ToolCard tool={tool} />
                  </div>
                ))}
              </div>
            </section>

            {/* Top Image Generation Tools */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Top Image Generation AI Tools
                  </h2>
                  <p className="text-gray-600">Best-rated AI art and image creation tools</p>
                </div>
                <Link
                  href="/categories/image-generation"
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 transition-colors"
                >
                  View All
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {topImageTools.map((tool, index) => (
                  <div key={tool.id} className="relative">
                    <div className="absolute -top-3 -left-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <ToolCard tool={tool} />
                  </div>
                ))}
              </div>
            </section>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

