import { Metadata } from 'next';
import ProductListing from '@/components/ProductListing';

export const metadata: Metadata = {
  title: 'Products - Tanoxi Technology',
  description: 'Browse our collection of high-quality products at Tanoxi Technology.',
};

export default function Products() {

  return <ProductListing />;
}
