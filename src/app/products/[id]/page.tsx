import { products } from '@/data/products';
import ProductDetail from '../../../components/ProductDetail';
import { Metadata } from 'next';

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const product = products.find(p => p.id === parseInt(params.id)) || products[0];
  return {
    title: `${product.translations.en.name} - Tanoxi Technology`,
    description: product.translations.en.description,
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductDetail params={params} />;
}
