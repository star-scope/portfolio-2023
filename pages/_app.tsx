import React from 'react';
import { AppProps } from 'next/app';
import '../src/styles/styles.css';
import '../src/app/globals.css';
import Footer from '../src/components/nav/footer';
import Head from 'next/head'


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/icons/icon-512x512.png" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default MyApp;