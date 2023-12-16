// pages/_app.js
import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';
import CookieConsent from '../components/CookieConsent'; // Import the component

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider> {/* Removed the theme prop */}
      <Component {...pageProps} />
      <CookieConsent /> {/* Add the Cookie Consent component */}
    </NextUIProvider>
  );
}

export default MyApp;
