import { AppProps } from 'next/app'
import { ReactNode } from 'react'
import { IntlProvider } from 'use-intl'
import { Header } from '@feature-components'
import { i18n } from '@constants'
import { ScrollProvider } from '@providers'
import 'styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <IntlProvider messages={i18n.en} locale="en">
      <ScrollProvider>
        <div className="h-screen flex flex-col">
          <Header />
          <Component {...pageProps} />
        </div>
      </ScrollProvider>
    </IntlProvider>
  )
}

export default MyApp
