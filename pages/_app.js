import '@/styles/globals.css'
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div>
        <Head>
          <title>Admin DashBoard</title>
        </Head>
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </ChakraProvider>
  )
  
}
