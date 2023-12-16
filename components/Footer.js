// components/Footer.js
import React from 'react';
import styles from '../styles/Footer.module.css'; // CSS module for styling

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>TRAILSTRIDE</h3>
          <ul className={styles.footerList}>
            <li>Styles/Shoes</li>
            <li>Subscribe</li>
            <li>About Us</li>
            
            
          </ul>
        </div>
        <div className={styles.footerSection}>
          <ul className={styles.footerList}>
            <li>Order and Shipping</li>
            <li>Returns</li>
            <li>Payment Method</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <ul className={styles.footerList}>
            <li>Instagram: @TrailStride</li>
            <li>Twitter: @TrailStride</li>
            <li>Facebook: @TrailStride</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
