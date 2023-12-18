// components/NavigationBar.js
import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/NavigationBar.module.css';

const NavBar = () => {
  const router = useRouter();

  // Function to scroll to the desired section
  const scrollToSection = (sectionId) => {
    // Use the push method with the hash to scroll into view
    router.push(`/#${sectionId}`);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Changed to a div and added an onClick event to scroll to the top of the page */}
        <div className={styles.navbarLogo} onClick={() => scrollToSection('top')}>
          TRAILSTRIDE
        </div>
        <div className={styles.navbarMenu}>
          {/* Changed to divs and added onClick events to scroll to the respective sections */}
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
      </div>
    </nav>
  );
};

export default NavBar;
