// pages/_app.js
import React from 'react';
import Head from 'next/head';
import { NextUIProvider } from '@nextui-org/react';
import Script from 'next/script'; // Import the Script component
import '../styles/globals.css';
import CookieConsent from '../components/CookieConsent';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.webp" />
        <title>TrailStride</title>
        <meta name="description" content="Explore the great outdoors with TrailStride's durable and comfortable hiking footwear. Embrace adventure with the perfect pair of shoes for your journey." />
      </Head>

      {/* Google Analytics script */}
      <Script 
        src="https://www.googletagmanager.com/gtag/js?id=G-DP2TLCRYQS" 
        strategy="afterInteractive"
        async
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DP2TLCRYQS');
        `}
      </Script>

      <NextUIProvider>
        <Component {...pageProps} />
        <CookieConsent />
      </NextUIProvider>
    </>
  );
}

export default MyApp;
