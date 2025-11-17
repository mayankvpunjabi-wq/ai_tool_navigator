import type { Metadata } from 'next';
import { categories } from '../../data/categories';
import CategoryCard from '../../components/CategoryCard';
import AdBanner from '../../components/AdBanner';

export const metadata: Metadata = {
  title: 'All Categories - AI Tool Navigator',
  description: 'Browse AI tools by category including writing, coding, image generation, productivity, business, and more.',
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            All Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse AI tools by category to find the perfect solution for your needs
          </p>
        </div>
        
        {/* Ad Banner - After Header */}
        <div className="mb-12">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <div className="text-xs text-gray-500 mb-2 text-center">Advertisement</div>
            <AdBanner />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div key={category.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

