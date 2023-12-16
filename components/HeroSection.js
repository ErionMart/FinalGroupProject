import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.contentBox}>
        <h1>TrailStride</h1>
        <p>Make the most with what you travel with.</p>
      </div>
    </div>
  );
};

export default HeroSection;
