import { createContext, FC, PropsWithChildren, useState } from 'react'
import { IntlProvider } from 'use-intl'
import { i18n } from '@constants'

export type Language = 'en' | 'pt-BR' | 'es' | 'de' | 'fr'

const defaultValue: {
  language: Language
  setLanguage: (lang: Language) => void
} = {
  language: 'en',
  setLanguage: () => {},
}

export const LanguageContext = createContext(defaultValue)

const getLang = (lang: Language): typeof i18n.en => {
  switch (lang) {
    case 'pt-BR':
      return i18n['pt-BR']
    case 'en':
    default:
      return i18n.en
  }
}

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      <IntlProvider messages={getLang(language)} locale={language}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  )
}
