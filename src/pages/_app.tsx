import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react'
import theme from './theme';

export default function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    <React.Fragment>
      <Head>
        <title>Multi-Step Form</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ChakraProvider theme={theme}>

        <Component {...pageProps} />
          
        
      </ChakraProvider>
    </React.Fragment>
  );
}
