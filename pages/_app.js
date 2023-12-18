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
        <link rel="icon" href="/logo.webp" />
        <title>TrailStride</title>
        <meta name="description" content="Explore the great outdoors with TrailStride's durable and comfortable hiking footwear. Embrace adventure with the perfect pair of shoes for your journey." />
        {/* You can add more tags here as needed */}
      </Head>
      <NextUIProvider>
        <Component {...pageProps} />
        <CookieConsent />
      </NextUIProvider>
    </>
  );
}

export default MyApp;
