import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { categories } from '../../../data/categories';
import { tools } from '../../../data/tools';
import ToolCard from '../../../components/ToolCard';
import Sidebar from '../../../components/Sidebar';
import AdBanner from '../../../components/AdBanner';

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { categoryId } = await params;
  const category = categories.find((cat) => cat.id === categoryId);
  
  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} AI Tools - AI Tool Navigator`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params;
  const category = categories.find(
    (cat) => cat.id === categoryId
  );

  if (!category) {
    notFound();
  }

  const categoryTools = tools.filter(
    (tool) => tool.category === categoryId
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          <div className="flex-1">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-gray-600">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/categories" className="hover:text-blue-600 transition-colors">
                    Categories
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-semibold">{category.name}</li>
              </ol>
            </nav>

            {/* Category Header */}
            <div className="mb-10 p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-100">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                {category.name} AI Tools
              </h1>
              <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Ad Banner - After Category Header */}
            <div className="mb-8">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <div className="text-xs text-gray-500 mb-2 text-center">Advertisement</div>
                <AdBanner />
              </div>
            </div>

            {/* Tools Grid */}
            {categoryTools.length > 0 ? (
              <>
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {categoryTools.length} Tool{categoryTools.length !== 1 ? 's' : ''} Found
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                  {categoryTools.map((tool, index) => (
                    <div key={tool.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                      <ToolCard tool={tool} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="rounded-2xl border border-gray-200 bg-white p-16 text-center shadow-sm">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-xl font-semibold text-gray-900 mb-2">
                  No tools found yet
                </p>
                <p className="text-gray-600">
                  Check back soon for tools in this category!
                </p>
              </div>
            )}
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

