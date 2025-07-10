'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useTranslations } from '@/context/useTranslations';
import { useLanguage } from '@/context/LanguageContext';
import { toast, Toaster } from 'react-hot-toast';
import { products, Product } from '@/data/products';

interface TranslatedProduct extends Product {
  name: string;
  description: string;
  category: string;
}

export default function ProductListing() {
  const [isClient, setIsClient] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addToCart, isLoading: isCartLoading } = useCart();
  const { t } = useTranslations();
  const { language, isLoading: isLanguageLoading } = useLanguage();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || isCartLoading || isLanguageLoading) {
    return null; // Or a loading spinner
  }

  const getTranslatedProducts = (): TranslatedProduct[] => {
    return products.map(product => ({
      ...product,
      name: product.translations[language].name,
      description: product.translations[language].description,
      category: product.translations[language].features[0], // Using first feature as category for demo
    }));
  };

  const translatedProducts = getTranslatedProducts();
  
  const filteredProducts = selectedCategory === 'all'
    ? translatedProducts
    : translatedProducts.filter(product => product.category === selectedCategory);

  const uniqueCategories = Array.from(
    new Set(translatedProducts.map(product => product.category))
  );
  const categories = ['all', ...uniqueCategories] as const;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Toaster />
      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('products.categories')}</h2>
        <div className="flex space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category === 'all' ? t('products.all') : category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Link href={`/products/${product.id}`}>
              <div className="aspect-w-3 aspect-h-2">
                <div className="w-full h-48 bg-gray-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-primary font-semibold">${product.price}</p>
              </div>
            </Link>
            <div className="px-4 pb-4">
              <button
                onClick={() => {
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1
                  });
                  toast.success(t('cart.added'));
                }}
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                {t('products.addToCart')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
