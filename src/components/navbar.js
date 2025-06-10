import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Eco AI</h2>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/learn">Learn</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
