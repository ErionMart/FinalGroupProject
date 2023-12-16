const StylesSection = () => {
    // ... your existing code
  
    return (
      <>
        <h2 className={styles.shopTitle}>Shop Different Styles</h2>
        <div className={styles.stylesContainer}>
          {stylesData.map((style, index) => (
            <div key={index} className={styles.styleBox}>
              <img src={style.src} alt={style.description} className={styles.shoeImage} />
              {/* Removed price and description from here */}
            </div>
          ))}
        </div>
        {/* New container for price and description at the bottom */}
        <div className={styles.infoContainer}>
          {stylesData.map((style, index) => (
            <div key={index} className={styles.infoBox}>
              <p className={styles.price}>{style.price}</p>
              <p className={styles.description}>{style.description}</p>
            </div>
          ))}
        </div>
      </>
    );
  };
  