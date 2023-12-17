// Components/SignUpSection.js
import React, { useState } from 'react';
import { Input, Button } from '@nextui-org/react';
import styles from '../styles/SignUpSection.module.css';

const SignUpSection = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(''); // Add an error state

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Reset the error before making a request
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setEmail('');
        alert(data.message); // Use the message from the server response
      } else {
        // Check if the error response is an object and convert it to string
        const errorMessage = typeof data.error === 'object' ? JSON.stringify(data.error) : data.error;
        setError(errorMessage || 'An unknown error occurred.'); // Set error message from the server response
      }
    } catch (e) {
      // Check if the caught error is an object and convert it to string
      const errorMessage = e && typeof e === 'object' ? JSON.stringify(e) : e;
      setError(errorMessage || 'An unknown error occurred.'); // Set error message from the catch block
    }
  };

  return (
    <div className={styles.signupContainer}>
      <p className={styles.signupText}>
        Unlock Exclusive Savings Today! Sign up for our no-obligation free trial and discover the benefits firsthand. As a special thank you, we're offering a 20% discount on your next purchase.
      </p>
      <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <Input 
          clearable 
          bordered 
          placeholder="Email Address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.emailInput} 
        />
        <Button type="submit" auto color="primary" className={styles.submitButton}>
          Submit
        </Button>
      </form>
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>} {/* Display errors */}
    </div>
  );
};

export default SignUpSection;
