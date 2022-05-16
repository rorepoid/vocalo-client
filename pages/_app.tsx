import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react'
import { darkTheme } from '../themes'

import '../styles/globals.css'

function MyApp ({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
