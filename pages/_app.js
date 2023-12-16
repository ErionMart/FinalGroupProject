// pages/_app.js

import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import theme from '../styles/Home.module.css'; // This imports your home module styles
import '../styles/globals.css'; // This imports your global styles

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      {/* The global styles will be applied here, including your green background */}
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
