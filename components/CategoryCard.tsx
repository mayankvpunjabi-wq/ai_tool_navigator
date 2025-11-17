import Link from 'next/link';
import { CategoryInfo } from '../types';

interface CategoryCardProps {
  category: CategoryInfo;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.id}`}
      className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/50 transition-all duration-300" />
      <div className="relative">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
              {category.icon}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {category.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-700 font-medium text-sm">
            <span>Explore</span>
            <svg
              className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
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
          </div>
        </div>
      </div>
    </Link>
  );
}

