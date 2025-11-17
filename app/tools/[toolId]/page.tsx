import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { tools } from '../../../data/tools';
import { categories } from '../../../data/categories';
import Sidebar from '../../../components/Sidebar';

interface ToolPageProps {
  params: {
    toolId: string;
  };
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { toolId } = await params;
  const tool = tools.find((t) => t.id === toolId);
  
  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: `${tool.name} - Review, Pricing & Features | AI Tool Navigator`,
    description: tool.description,
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { toolId } = await params;
  const tool = tools.find((t) => t.id === toolId);

  if (!tool) {
    notFound();
  }

  const category = categories.find((cat) => cat.id === tool.category);

  const getPricingBadge = () => {
    if (tool.pricing.free && tool.pricing.paid) {
      return (
        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
          Freemium
        </span>
      );
    } else if (tool.pricing.free) {
      return (
        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
          Free
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
          Paid
        </span>
      );
    }
  };

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
                <li>
                  <Link
                    href={`/categories/${tool.category}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {category?.name}
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-semibold">{tool.name}</li>
              </ol>
            </nav>

            {/* Tool Header */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 mb-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h1 className="text-4xl font-bold text-gray-900">
                      {tool.name}
                    </h1>
                    {tool.featured && (
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                        Featured
                      </span>
                    )}
                    {getPricingBadge()}
                  </div>
                  {tool.rating && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(tool.rating!)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-lg font-medium text-gray-700">
                        {tool.rating}/5.0
                      </span>
                    </div>
                  )}
                  <p className="text-lg text-gray-600 mb-6">{tool.description}</p>
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Visit Website
                    <svg
                      className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Pricing
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Free Tier</span>
                  <span className="text-gray-900 font-semibold">
                    {tool.pricing.free ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Paid Plans</span>
                  <span className="text-gray-900 font-semibold">
                    {tool.pricing.paid ? 'Yes' : 'No'}
                  </span>
                </div>
                {tool.pricing.price && (
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Starting Price</span>
                    <span className="text-gray-900 font-semibold">
                      {tool.pricing.price}
                    </span>
                  </div>
                )}
                {tool.pricing.pricingModel && (
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-700 font-medium">Pricing Model</span>
                    <span className="text-gray-900 font-semibold capitalize">
                      {tool.pricing.pricingModel.replace('-', ' ')}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pros and Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-green-500 mr-2 text-3xl">✓</span>
                  Pros
                </h2>
                <ul className="space-y-3">
                  {tool.pros.map((pro, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-red-500 mr-2 text-3xl">✗</span>
                  Cons
                </h2>
                <ul className="space-y-3">
                  {tool.cons.map((con, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Use Cases */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Ideal Use Cases
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tool.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow"
                  >
                    <svg
                      className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-gray-800 font-medium">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

