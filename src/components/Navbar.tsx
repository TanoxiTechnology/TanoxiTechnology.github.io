'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCartIcon, Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Tanoxi Technology
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary">
              {language === 'en' ? 'Home' : '首页'}
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary">
              {language === 'en' ? 'Products' : '产品'}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary">
              {language === 'en' ? 'About' : '关于我们'}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary">
              {language === 'en' ? 'Contact' : '联系我们'}
            </Link>
            <Link href="/cart" className="text-gray-700 hover:text-primary">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                {language === 'en' ? 'Home' : '首页'}
              </Link>
              <Link
                href="/products"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                {language === 'en' ? 'Products' : '产品'}
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                {language === 'en' ? 'About' : '关于我们'}
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                {language === 'en' ? 'Contact' : '联系我们'}
              </Link>
              <Link
                href="/cart"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                {language === 'en' ? 'Cart' : '购物车'}
              </Link>
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
