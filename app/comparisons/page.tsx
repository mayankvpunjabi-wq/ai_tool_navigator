import Link from 'next/link';
import type { Metadata } from 'next';
import { tools } from '../../data/tools';
import Sidebar from '../../components/Sidebar';

export const metadata: Metadata = {
  title: 'AI Tool Comparisons - Side-by-Side Tool Reviews',
  description: 'Compare AI tools side-by-side to find the best solution for your needs. Detailed feature comparisons and reviews.',
};

export default function ComparisonsPage() {
  // Example comparison: ChatGPT vs Claude
  const chatGPT = tools.find((t) => t.id === 'chatgpt');
  const claude = tools.find((t) => t.id === 'claude');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          <div className="flex-1">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                AI Tool Comparisons
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Side-by-side comparisons to help you choose the best AI tool for your needs
              </p>
            </div>

            {chatGPT && claude && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  ChatGPT vs Claude
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* ChatGPT Column */}
                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {chatGPT.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{chatGPT.description}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-semibold text-gray-900">
                          Rating: {chatGPT.rating}/5.0
                        </span>
                      </div>
                      <a
                        href={chatGPT.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                      >
                        Visit Website
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Pricing</h4>
                      <p className="text-gray-700 mb-4">
                        {chatGPT.pricing.price || 'Free tier available'}
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Best For</h4>
                      <ul className="space-y-2">
                        {chatGPT.useCases.slice(0, 3).map((useCase, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <span className="text-blue-500 mr-2">•</span>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Claude Column */}
                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {claude.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{claude.description}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-semibold text-gray-900">
                          Rating: {claude.rating}/5.0
                        </span>
                      </div>
                      <a
                        href={claude.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                      >
                        Visit Website
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Pricing</h4>
                      <p className="text-gray-700 mb-4">
                        {claude.pricing.price || 'Free tier available'}
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-3">Best For</h4>
                      <ul className="space-y-2">
                        {claude.useCases.slice(0, 3).map((useCase, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <span className="text-blue-500 mr-2">•</span>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Comparison Table */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Feature Comparison
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">
                            Feature
                          </th>
                          <th className="text-center py-3 px-4 font-semibold text-gray-900">
                            {chatGPT.name}
                          </th>
                          <th className="text-center py-3 px-4 font-semibold text-gray-900">
                            {claude.name}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-700">Free Tier</td>
                          <td className="py-3 px-4 text-center">
                            {chatGPT.pricing.free ? '✓' : '✗'}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {claude.pricing.free ? '✓' : '✗'}
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-700">Paid Plans</td>
                          <td className="py-3 px-4 text-center">
                            {chatGPT.pricing.paid ? '✓' : '✗'}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {claude.pricing.paid ? '✓' : '✗'}
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-700">Rating</td>
                          <td className="py-3 px-4 text-center font-semibold">
                            {chatGPT.rating}/5.0
                          </td>
                          <td className="py-3 px-4 text-center font-semibold">
                            {claude.rating}/5.0
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-10 text-center shadow-sm">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                More Comparisons Coming Soon
              </h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                We're constantly adding new comparison guides to help you make informed decisions.
              </p>
              <Link
                href="/categories"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Browse All Tools
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

