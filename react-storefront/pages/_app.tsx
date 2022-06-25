import type { AppProps } from 'next/app'
import { ApolloProvider, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from "@apollo/client/utilities";
import 'tailwindcss/tailwind.css'

import { apolloClient } from '~/lib';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
