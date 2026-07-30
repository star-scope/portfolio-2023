import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Footer from '../src/components/nav/footer';
import '../src/styles/styles.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const body = document.body;
    if (router.pathname === '/marquez') {
      body.classList.add('marquez-page');
    } else {
      body.classList.remove('marquez-page');
    }
  }, [router.pathname]);

  return (
    <div>
      <Head>
        <link rel="icon" href="/icons/icon-512x512.png" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      {router.pathname !== '/marquez' && <Footer />}
    </div>
  );
};

export default MyApp;
