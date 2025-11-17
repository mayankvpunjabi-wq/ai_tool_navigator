import Link from 'next/link';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const getPricingBadge = () => {
    if (tool.pricing.free && tool.pricing.paid) {
      return (
        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
          Freemium
        </span>
      );
    } else if (tool.pricing.free) {
      return (
        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
          Free
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
          Paid
        </span>
      );
    }
  };

  return (
    <Link
      href={`/tools/${tool.id}`}
      className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/30 group-hover:to-purple-50/30 transition-all duration-300 rounded-2xl" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {tool.name}
              </h3>
              {tool.featured && (
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm">
                  ⭐ Featured
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {getPricingBadge()}
            </div>
          </div>
          {tool.rating && (
            <div className="flex items-center gap-1.5 bg-yellow-50 px-2.5 py-1 rounded-lg">
              <svg
                className="h-4 w-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-bold text-gray-900">
                {tool.rating}
              </span>
            </div>
          )}
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {tool.description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm font-medium text-gray-700">
            {tool.pricing.price || 'Free'}
          </span>
          <span className="text-blue-600 font-semibold group-hover:text-blue-700 flex items-center gap-1">
            Learn more
            <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

