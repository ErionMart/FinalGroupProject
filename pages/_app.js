import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import theme from '../styles/Home.module.css'; // Adjust the path as necessary

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;