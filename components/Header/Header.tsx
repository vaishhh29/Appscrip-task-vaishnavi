'use client';

import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Top announcement bar */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topBarContent}>
            <span className={styles.topBarItem}>Lorem ipsum dolor</span>
            <span className={styles.topBarItem}>Lorem ipsum dolor</span>
            <span className={`${styles.topBarItem} ${styles.desktopOnly}`}>Lorem ipsum dolor</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            {/* Mobile menu button */}
            <button
              className={styles.mobileMenuBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>

            {/* Logo */}
            <div className={styles.logo}>
              <h2>LOGO</h2>
            </div>

            {/* Desktop navigation */}
            <nav className={styles.desktopNav} aria-label="Main navigation">
              <a href="#shop" className={styles.navLink}>SHOP</a>
              <a href="#skills" className={styles.navLink}>SKILLS</a>
              <a href="#stories" className={styles.navLink}>STORIES</a>
              <a href="#about" className={styles.navLink}>ABOUT</a>
              <a href="#contact" className={styles.navLink}>CONTACT US</a>
            </nav>

            {/* Header actions */}
            <div className={styles.headerActions}>
              <button className={styles.iconBtn} aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
              <button className={styles.iconBtn} aria-label="Wishlist">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <button className={styles.iconBtn} aria-label="Shopping cart">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </button>
              <button className={`${styles.iconBtn} ${styles.desktopOnly}`} aria-label="User account">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
              <select className={`${styles.langSelect} ${styles.desktopOnly}`} aria-label="Select language">
                <option value="en">ENG</option>
                <option value="es">ESP</option>
                <option value="fr">FRA</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          <div className={styles.container}>
            <a href="#shop" className={styles.mobileNavLink}>SHOP</a>
            <a href="#skills" className={styles.mobileNavLink}>SKILLS</a>
            <a href="#stories" className={styles.mobileNavLink}>STORIES</a>
            <a href="#about" className={styles.mobileNavLink}>ABOUT</a>
            <a href="#contact" className={styles.mobileNavLink}>CONTACT US</a>
          </div>
        </nav>
      )}
    </header>
  );
}