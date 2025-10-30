'use client';

import { Product } from '@/types/product';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Create SEO-friendly image name from product title
  const imageAlt = `${product.title} - ${product.category}`;
  
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={imageAlt}
          className={styles.image}
          loading="lazy"
        />
        <button 
          className={styles.wishlistBtn}
          aria-label={`Add ${product.title} to wishlist`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        
        <p className={styles.signInText}>
          <a href="#signin" className={styles.signInLink}>Sign in</a> or Create an account to see pricing
        </p>
        
        <button className={styles.addToCartBtn}>
          ADD TO CART
        </button>
      </div>
    </article>
  );
}