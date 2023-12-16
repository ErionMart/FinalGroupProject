// components/CookieConsent.js
import React, { useState } from 'react';
import styles from '../styles/CookieConsent.module.css'; // CSS module for styling

const CookieConsent = () => {
  const [consent, setConsent] = useState(false);

  // Save the consent in local storage or manage it as needed
  const handleConsent = () => {
    setConsent(true);
    // Implement storing consent, e.g., in local storage
    localStorage.setItem('cookieConsent', 'true');
  };

  // Don't render anything if consent is given
  if (consent) return null;

  return (
    <div className={styles.cookieConsent}>
      <p>We use cookies to improve your experience on our site. By continuing to use our site, you accept our use of cookies.</p>
      <a href="/privacy-policy">Privacy Policy</a>
      <button onClick={handleConsent}>Accept</button>
    </div>
  );
};

export default CookieConsent;
