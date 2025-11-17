import Link from 'next/link';
import { categories } from '../data/categories';
import { tools } from '../data/tools';
import CategoryCard from '../components/CategoryCard';
import ToolCard from '../components/ToolCard';
import AdBanner from '../components/AdBanner';

export default function Home() {
  const featuredTools = tools.filter(tool => tool.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-sm font-medium">✨ Discover 50+ AI Tools</span>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
              Discover the Best AI Tools
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-blue-100 mb-10 leading-relaxed">
              Find the perfect AI tool for writing, coding, image generation, productivity, 
              business, and more. Compare features, pricing, and use cases to make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/categories"
                className="group inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                Browse Categories
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/top-lists"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                View Top Lists
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner - After Hero */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <div className="text-xs text-gray-500 mb-2 text-center">Advertisement</div>
            <AdBanner />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse AI tools organized by category to find exactly what you need
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <div key={category.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner - Between Categories and Featured Tools */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <div className="text-xs text-gray-500 mb-2 text-center">Advertisement</div>
            <AdBanner />
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured AI Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hand-picked top AI tools with detailed reviews and comparisons
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool, index) => (
              <div key={tool.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="/categories"
              className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View All Tools
              <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Ad Banner - After Featured Tools */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="text-xs text-gray-500 mb-2 text-center">Advertisement</div>
            <AdBanner />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why AI Tool Navigator?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your trusted source for discovering and comparing the best AI tools
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group text-center p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl shadow-lg group-hover:scale-110 transition-transform">
                📊
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Transparent Information
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Clear pricing, features, pros, and cons for every tool to help you make informed decisions.
              </p>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white text-3xl shadow-lg group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Curated Lists
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Expertly curated top lists and comparison guides to save you time and effort.
              </p>
            </div>
            <div className="group text-center p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white text-3xl shadow-lg group-hover:scale-110 transition-transform">
                🔍
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Easy Navigation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Organized categories and intuitive search to find the perfect tool for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
