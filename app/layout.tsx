import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Tool Navigator - Discover the Best AI Tools",
  description: "Find the perfect AI tool for writing, coding, image generation, productivity, business, and more. Compare features, pricing, and use cases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="UvNMlROWzDBh3OxmOnb_N7BN2X4KQF5c6_PSWNYebP4" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="adsterra-script"
          strategy="afterInteractive"
          async
          data-cfasync="false"
          src="//pl28075472.effectivegatecpm.com/164e02aec13939cc8449dfef5bd4510d/invoke.js"
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg">
                    AI
                  </div>
                  <span className="text-xl font-bold">Tool Navigator</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your guide to discovering the best AI tools for every need. Compare, review, and choose the perfect AI solution.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-white">Categories</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><Link href="/categories/writing" className="hover:text-white transition-colors">Writing</Link></li>
                  <li><Link href="/categories/coding" className="hover:text-white transition-colors">Coding</Link></li>
                  <li><Link href="/categories/image-generation" className="hover:text-white transition-colors">Image Generation</Link></li>
                  <li><Link href="/categories/productivity" className="hover:text-white transition-colors">Productivity</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-white">Resources</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><Link href="/top-lists" className="hover:text-white transition-colors">Top Lists</Link></li>
                  <li><Link href="/comparisons" className="hover:text-white transition-colors">Comparisons</Link></li>
                  <li><Link href="/categories" className="hover:text-white transition-colors">All Categories</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-white">Contact</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a 
                      href="mailto:mayankvpunjabi@gmail.com" 
                      className="hover:text-white transition-colors font-medium"
                    >
                      mayankvpunjabi@gmail.com
                    </a>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    For feedback and queries
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-400">&copy; 2024 AI Tool Navigator. All rights reserved.</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a 
                    href="mailto:mayankvpunjabi@gmail.com" 
                    className="hover:text-white transition-colors"
                  >
                    mayankvpunjabi@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
