import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react'

import '../styles/globals.css'

function MyApp ({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
