'use client';

import { useCart } from '@/context/CartContext';
import { useTranslations } from '@/context/useTranslations';
import Link from 'next/link';

export default function Cart() {
  const { items, removeFromCart, updateQuantity } = useCart();
  const { t } = useTranslations();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">{t('cart.empty')}</h1>
          <p className="text-gray-600 mb-8">
            {t('cart.browseProducts')}
          </p>
          <Link
            href="/products"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors"
          >
            View Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">{t('cart.title')}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {items.map(item => (
            <div
              key={item.id}
              className="flex items-center border-b border-gray-200 py-4"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <label htmlFor={`quantity-${item.id}`} className="sr-only">
                    {t('cart.quantity')}
                  </label>
                  <select
                    id={`quantity-${item.id}`}
                    value={item.quantity}
                    onChange={e =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  {t('cart.remove')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">{t('cart.orderSummary')}</h2>
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.id} className="flex justify-between">
                <span className="text-gray-600">
                  {item.name} (x{item.quantity})
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/contact"
              className="block w-full bg-primary text-white text-center py-3 rounded-md hover:bg-secondary transition-colors"
            >                {t('cart.contactPurchase')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
