'use client';

import { useState, useEffect } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/context/CartContext';
import { useTranslations } from '@/context/useTranslations';
import { useLanguage } from '@/context/LanguageContext';
import { toast, Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { products } from '@/data/products';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [isClient, setIsClient] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart, isLoading: isCartLoading } = useCart();
  const { t } = useTranslations();
  const { language, isLoading: isLanguageLoading } = useLanguage();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Find the product by ID
  const product = products.find(p => p.id === parseInt(params.id)) || products[0];

  if (!isClient || isCartLoading || isLanguageLoading) {
    return null; // Or a loading spinner
  }

  // Get translated content
  const {
    name,
    description,
    features,
    specifications
  } = product.translations[language];

  // Mock images array - replace with actual product images
  const images = ['/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Toaster />
      <Link
        href="/products"
        className="inline-flex items-center text-gray-600 hover:text-primary mb-8"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        {t('common.backToProducts')}
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <div className="w-full h-96 bg-gray-300" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="w-full h-24 bg-gray-300" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <p className="text-2xl text-primary font-semibold mb-6">
            ${product.price}
          </p>
          <p className="text-gray-600 mb-8">{description}</p>

          {/* Features */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t('products.keyFeatures')}</h2>
            <ul className="list-disc list-inside space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{t('products.specifications')}</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(specifications).map(([key, value]) => (
                <div key={key}>
                  <dt className="font-medium text-gray-900">{key}</dt>
                  <dd className="text-gray-600">{value}</dd>
                </div>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-8">
            <button
              onClick={() => {
                addToCart({
                  id: product.id,
                  name: name,
                  price: product.price,
                  quantity: 1
                });
                toast.success(t('products.addedToCart').replace('%s', name));
              }}
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition-colors"
            >
              {t('common.addToCart')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
