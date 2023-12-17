import React from 'react';
import styles from '../styles/StylesSection.module.css';
// Example stylesData array with new image paths
const stylesData = [
  {
    src: '/LowWeight.webp',
    description: 'Low Weight',
    price: '$110',
  },
  {
    src: '/MidWeight.webp',
    description: 'Mid Weight',
    price: '$140',
  },
  {
    src: '/HeavyWeight.webp',
    description: 'Heavy Weight',
    price: '$160',
  },
  {
    src: '/Winter.webp',
    description: 'Winter',
    price: '$180',
  },
  // ... other styles
];

const StylesSection = () => {
  return (
    <div id="styles">
    
      <h2 className={styles.shopTitle}>Shop Different Styles</h2>
      <div className={styles.stylesContainer}>
        {stylesData.map((style, index) => (
          <div key={index} className={styles.styleBox}>
            <img src={style.src} alt={style.description} className={styles.shoeImage} />
            <p className={styles.price}>{style.price}</p>
            <p className={styles.description}>{style.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StylesSection;
