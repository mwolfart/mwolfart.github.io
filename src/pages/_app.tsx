import { Header } from '@feature-components'
import { AppProps } from 'next/app'
import { ReactNode } from 'react'
import { IntlProvider } from 'use-intl'
import { i18n } from '@constants'
import 'styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <IntlProvider messages={i18n.en} locale="en">
      <div className="h-screen flex flex-col">
        <Header />
        <Component {...pageProps} />
      </div>
    </IntlProvider>
  )
}

export default MyApp
