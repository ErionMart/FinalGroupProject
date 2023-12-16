// components/SignUpSection.js
import React from 'react';
import { Input, Button } from '@nextui-org/react';
import styles from '../styles/SignUpSection.module.css';

const SignUpSection = () => {
  return (
    <div className={styles.signupContainer}>
      <p className={styles.signupText}>
        Unlock Exclusive Savings Today! Sign up for our no-obligation free trial and discover the benefits firsthand. As a special thank you, we're offering a 20% discount on your next purchase.
      </p>
      <div className={styles.inputContainer}>
        <Input clearable bordered placeholder="Email Address" className={styles.emailInput} />
        <Button auto color="#ffffff" backgroundColor="#000000" className={styles.submitButton}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default SignUpSection;
