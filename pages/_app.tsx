import React from "react";  
import Head from "next/head";  
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@/utils/apollo'

const App = ({ Component, pageProps }) => {  
  const apolloClient = useApollo(pageProps.initialApolloState)
  
  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Arreglos YA!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
      </Head>
      <Component {...pageProps} />

    </ApolloProvider>
  )
};

export default App