import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Layout } from '../src/components/Layout';
import '../src/scss/globals.scss';
import '../src/scss/typography.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>Анкета соискателя</title>
        <meta name="description" content="Анкета соискателя" />
        <link rel="icon" href="/fav.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
