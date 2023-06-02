import { AppProps } from 'next/app'
import { ReactNode } from 'react'
import { Header } from '@feature-components'
import { LanguageProvider, ScrollProvider } from '@providers'
import 'styles/globals.css'
import { ThemeProvider } from 'next-themes'

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <ThemeProvider attribute="class">
      <LanguageProvider>
        <ScrollProvider>
          <div className="relative">
            <Header />
            <Component {...pageProps} />
          </div>
        </ScrollProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default MyApp
