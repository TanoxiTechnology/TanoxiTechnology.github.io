'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from '@/context/useTranslations';

export default function Home() {
  const { t } = useTranslations();
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('home.hero.subtitle')}
            </p>
            <Link
              href="/products"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-secondary transition-colors"
            >
              {t('home.hero.browseProducts')}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.featuredCategories.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Replace with actual category images and links */}
            {[1, 2, 3].map((category) => (
              <div
                key={category}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gray-300" />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Category {category}
                    </h3>
                    <Link
                      href={`/products?category=${category}`}
                      className="inline-block bg-white text-primary px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      {t('home.featuredCategories.viewProducts')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.whyChooseUs.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.whyChooseUs.quality.title')}</h3>
              <p className="text-gray-600">
                {t('home.whyChooseUs.quality.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.whyChooseUs.support.title')}</h3>
              <p className="text-gray-600">
                {t('home.whyChooseUs.support.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.whyChooseUs.prices.title')}</h3>
              <p className="text-gray-600">
                {t('home.whyChooseUs.prices.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
