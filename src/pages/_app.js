import Header from '@/components/header/Header';
import '../css/globals.css';

import {
  ClerkProvider,
} from '@clerk/nextjs'

export default function App({ Component, pageProps }) {
  return <>
    <ClerkProvider>
      <Header />
      <Component {...pageProps} />
    </ClerkProvider>
  </>
}

