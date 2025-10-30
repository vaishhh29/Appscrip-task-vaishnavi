import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Discover Our Products | Premium E-Commerce Store',
  description: 'Explore our curated collection of premium products. Shop the latest trends in fashion, electronics, jewelry, and more. Free shipping on orders over $50.',
  keywords: 'ecommerce, online shopping, fashion, electronics, jewelry, premium products',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Discover Our Products | Premium E-Commerce Store',
    description: 'Explore our curated collection of premium products.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Premium E-Commerce Store',
              description: 'Discover our curated collection of premium products',
              url: 'https://your-domain.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://your-domain.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}