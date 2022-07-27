import { AppProps } from 'next/app'
import { ReactNode } from 'react'
import 'styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return <Component {...pageProps} />
}

export default MyApp
