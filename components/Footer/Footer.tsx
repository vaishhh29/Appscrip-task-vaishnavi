import NewsletterForm from './NewsletterForm';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Newsletter section */}
        <div className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <h2 className={styles.newsletterTitle}>BE THE FIRST TO KNOW</h2>
            <p className={styles.newsletterText}>Sign up for updates from mettā muse.</p>
            <NewsletterForm />
          </div>
        </div>

        {/* Footer links */}
        <div className={styles.linksSection}>
          <div className={styles.linksGrid}>
            {/* Contact */}
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>CONTACT US</h3>
              <div className={styles.contactInfo}>
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
              </div>
              
              <h3 className={styles.columnTitle} style={{marginTop: '2rem'}}>CURRENCY</h3>
              <div className={styles.currencyInfo}>
                <span className={styles.flag}>🇺🇸</span>
                <span>USD</span>
              </div>
              <p className={styles.currencyNote}>
                Transactions will be completed in Euros and a currency reference is available on hover.
              </p>
            </div>

            {/* mettā muse */}
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>mettā muse</h3>
              <nav aria-label="Company links">
                <ul className={styles.linkList}>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#stories">Stories</a></li>
                  <li><a href="#artisans">Artisans</a></li>
                  <li><a href="#boutiques">Boutiques</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                  <li><a href="#compliance">EU Compliances Docs</a></li>
                </ul>
              </nav>
            </div>

            {/* Quick Links */}
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>QUICK LINKS</h3>
              <nav aria-label="Quick links">
                <ul className={styles.linkList}>
                  <li><a href="#orders">Orders & Shipping</a></li>
                  <li><a href="#seller">Join/Login as a Seller</a></li>
                  <li><a href="#payment">Payment & Pricing</a></li>
                  <li><a href="#returns">Return & Refunds</a></li>
                  <li><a href="#faqs">FAQs</a></li>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#terms">Terms & Conditions</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Social and payment */}
        <div className={styles.bottomSection}>
          <div className={styles.socialSection}>
            <h3 className={styles.columnTitle}>FOLLOW US</h3>
            <div className={styles.socialIcons}>
              <a 
                href="https://linkedin.com" 
                className={styles.socialIcon}
                aria-label="Follow us on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                className={styles.socialIcon}
                aria-label="Follow us on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.paymentSection}>
            <h3 className={styles.columnTitle}>mettā muse ACCEPTS</h3>
            <div className={styles.paymentIcons}>
              <div className={styles.paymentIcon} aria-label="Google Pay">GPay</div>
              <div className={styles.paymentIcon} aria-label="Mastercard">MC</div>
              <div className={styles.paymentIcon} aria-label="PayPal">PP</div>
              <div className={styles.paymentIcon} aria-label="Amex">Amex</div>
              <div className={styles.paymentIcon} aria-label="Apple Pay">APay</div>
              <div className={styles.paymentIcon} aria-label="Pay">Pay</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>Copyright © {currentYear} mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}