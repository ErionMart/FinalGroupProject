// pages/_app.js
import React from 'react';
import Head from 'next/head'; // Import the Head component
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';
import CookieConsent from '../components/CookieConsent'; // Import the component

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" /> {/* Reference to your logo.png file */}
        <title>TrailStride</title> {/* You can also set a default title for all pages */}
        {/* Any other tags you want to include in the head */}
      </Head>
      <NextUIProvider> {/* Removed the theme prop */}
        <Component {...pageProps} />
        <CookieConsent /> {/* Add the Cookie Consent component */}
      </NextUIProvider>
    </>
  );
}

export default MyApp;
