// components/CookieConsent.js
import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js
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
      {/* Correct usage of Link component */}
      <Link href="/policy">
        Privacy Policy
      </Link>
      <button onClick={handleConsent}>Accept</button>
    </div>
  );
};

export default CookieConsent;
