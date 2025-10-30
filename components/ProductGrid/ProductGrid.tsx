'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import ProductCard from '../ProductCard/ProductCard';
import FilterSidebar from '../FilterSidebar/FilterSidebar';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
  initialProducts: Product[];
}

export default function ProductGrid({ initialProducts }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [showFilters, setShowFilters] = useState(true); // Desktop filter visibility
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false); // Mobile modal state
  const [sortBy, setSortBy] = useState('RECOMMENDED');

  useEffect(() => {
    sortProducts(sortBy);
  }, [sortBy]);

  const sortProducts = (sortOption: string) => {
    let sorted = [...products];
    
    switch (sortOption) {
      case 'PRICE: LOW TO HIGH':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'PRICE: HIGH TO LOW':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'NEWEST FIRST':
        sorted.sort((a, b) => b.id - a.id);
        break;
      default:
        sorted = initialProducts;
    }
    
    setProducts(sorted);
  };

  return (
    <section className={styles.section}>
      {/* Filter controls bar */}
      <div className={styles.controlBar}>
        <div className={styles.container}>
          <div className={styles.controls}>
            <div className={styles.leftControls}>
              {/* Mobile filter button */}
              <button
                className={styles.mobileFilterBtn}
                onClick={() => setMobileFiltersOpen(true)}
                aria-label="Open filters"
              >
                FILTER
              </button>
              
              {/* Desktop filter toggle */}
              <button
                className={styles.desktopFilterToggle}
                onClick={() => setShowFilters(!showFilters)}
                aria-label={showFilters ? 'Hide filters' : 'Show filters'}
              >
                <span className={styles.itemCount}>{products.length} ITEMS</span>
                <span className={styles.separator}>{showFilters ? '<' : '>'}</span>
                <span className={styles.filterText}>
                  {showFilters ? 'HIDE FILTER' : 'SHOW FILTER'}
                </span>
              </button>
              
              {/* Mobile item count */}
              <span className={styles.mobileItemCount}>{products.length} ITEMS</span>
            </div>

            {/* Sort dropdown */}
            <select
              className={styles.sortSelect}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort products"
            >
              <option>RECOMMENDED</option>
              <option>NEWEST FIRST</option>
              <option>POPULAR</option>
              <option>PRICE: HIGH TO LOW</option>
              <option>PRICE: LOW TO HIGH</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Desktop Filter Sidebar - Conditionally rendered based on showFilters */}
          {showFilters && (
            <FilterSidebar
              isOpen={mobileFiltersOpen}
              onClose={() => setMobileFiltersOpen(false)}
            />
          )}

          {/* Products Grid */}
          <main className={styles.productsMain}>
            <h2 className="visually-hidden">Product Listings</h2>
            <div className={styles.grid}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}