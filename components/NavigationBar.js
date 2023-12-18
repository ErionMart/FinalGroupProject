// components/NavigationBar.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/NavigationBar.module.css';

const NavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
    router.push(`/#${sectionId}`);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo} onClick={() => scrollToSection('top')}>
          TRAILSTRIDE
        </div>
        <div className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* Icon for the menu toggle */}
          ☰
        </div>
        {/* Conditionally render the menu based on isMenuOpen state */}
        {isMenuOpen && (
          <div className={styles.navbarMenu}>
            <div className={styles.navbarLink} onClick={() => scrollToSection('styles')}>
              Styles/Shoes
            </div>
            <div className={styles.navbarLink} onClick={() => scrollToSection('about')}>
              About Us
            </div>
            <div className={styles.navbarLink} onClick={() => scrollToSection('subscribe')}>
              Subscribe
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
