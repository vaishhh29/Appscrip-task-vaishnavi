'use client';

import { FormEvent } from 'react';
import styles from './NewsletterForm.module.css';

export default function NewsletterForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    console.log('Newsletter signup:', email);
    // Add your newsletter signup logic here
    alert('Thank you for subscribing!');
    e.currentTarget.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Enter your e-mail..."
        className={styles.input}
        aria-label="Email address"
        required
      />
      <button type="submit" className={styles.button}>
        SUBSCRIBE
      </button>
    </form>
  );
}