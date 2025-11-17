import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow">
              AI
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Tool Navigator
            </span>
          </Link>
          <nav className="hidden md:flex md:items-center md:space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              Categories
            </Link>
            <Link
              href="/top-lists"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              Top Lists
            </Link>
            <Link
              href="/comparisons"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              Comparisons
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

