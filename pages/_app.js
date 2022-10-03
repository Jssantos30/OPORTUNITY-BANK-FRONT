import * as React from 'react'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import Head from 'next/head'
import Layout from '../Layout'
import { AuthProvider } from '../auth-context'
import { NotificationProvider } from '../notification-context'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)

  async function fetcher(url) {
    let response = await fetch(url)
    return await response.json()
  }
  React.useEffect(() => {
    function preventWheelChange() {
      if (document.activeElement.type === 'number') {
        document.activeElement.blur()
      }
    }

    document.addEventListener('wheel', preventWheelChange)

    return () => {
      document.removeEventListener('wheel', preventWheelChange)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Banco de los Pobres - Alcaldía de Medellín</title>
      </Head>
      <AuthProvider>
        <NotificationProvider>
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </NotificationProvider>
      </AuthProvider>
    </>
  )
}

export default MyApp
