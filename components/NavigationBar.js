import React from 'react';
import Link from 'next/link';
import styles from '../styles/NavigationBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.navbarLogo}>
          TRAILSTRIDE
        </Link>
        <div className={styles.navbarMenu}>
          <Link href="/styles-shoes" className={styles.navbarLink}>
            Styles/Shoes
          </Link>
          <Link href="/about-us" className={styles.navbarLink}>
            About Us
          </Link>
          <Link href="/subscribe" className={styles.navbarLink}>
            Subscribe
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
