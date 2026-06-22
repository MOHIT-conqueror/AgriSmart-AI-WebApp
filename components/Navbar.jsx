"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-emerald-100 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <span className="font-bold text-emerald-700 text-xl tracking-tight">
                AgriSmart AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 dark:text-gray-200 hover:text-emerald-600 transition"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 dark:text-gray-200 hover:text-emerald-600 transition"
            >
              About
            </Link>

            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-600 dark:text-gray-200 hover:text-emerald-600 transition"
            >
              Dashboard
            </Link>

            <Link
              href="/advisory"
              className="text-sm font-medium text-gray-600 dark:text-gray-200 hover:text-emerald-600 transition"
            >
              Advisory
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <Link
              href="/login"
              className="px-5 py-2 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-2">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="px-2 py-1 rounded border border-gray-300 dark:border-gray-600"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-emerald-700 dark:text-white p-2"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute w-full left-0 top-16">
          <div className="px-4 pt-2 pb-4 space-y-2">

            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 dark:text-white hover:bg-emerald-50 rounded-md"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 dark:text-white hover:bg-emerald-50 rounded-md"
            >
              About
            </Link>

            <Link
              href="/dashboard"
              className="block px-3 py-2 text-gray-700 dark:text-white hover:bg-emerald-50 rounded-md"
            >
              Dashboard
            </Link>

            <Link
              href="/advisory"
              className="block px-3 py-2 text-gray-700 dark:text-white hover:bg-emerald-50 rounded-md"
            >
              Advisory
            </Link>

            {/* Mobile Login */}
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <Link
                href="/login"
                className="block w-full text-center px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
              >
                Login
              </Link>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}