import { AppProps } from 'next/app'
import { ReactNode } from 'react'
import { Header } from '@feature-components'
import { LanguageProvider, ScrollProvider } from '@providers'
import 'styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <LanguageProvider>
      <ScrollProvider>
        <div className="relative">
          <Header />
          <Component {...pageProps} />
        </div>
      </ScrollProvider>
    </LanguageProvider>
  )
}

export default MyApp
