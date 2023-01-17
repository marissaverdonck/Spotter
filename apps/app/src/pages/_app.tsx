import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../styles/Global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SPOTTER</title>
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
