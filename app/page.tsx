import { fetchProducts } from '@/lib/api';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import Footer from '@/components/Footer/Footer';

// This enables SSR with ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  // Server-side data fetching
  const products = await fetchProducts();

  // Schema.org for Product Listing
  const productListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.slice(0, 10).map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.title,
        image: product.image,
        description: product.description,
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'USD',
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productListSchema),
        }}
      />
      <Header />
      <main>
        <Hero />
        <ProductGrid initialProducts={products} />
      </main>
      <Footer />
    </>
  );
}