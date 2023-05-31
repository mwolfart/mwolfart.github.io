import { Language, LanguageContext } from '@providers'
import { US, BR, ES, DE, FR } from 'country-flag-icons/react/3x2'
import { FC, useContext, useState } from 'react'
import cx from 'classnames'
import { useTranslations } from 'use-intl'

interface IconProps {
  country: Language
  onClick: () => void
  ariaLabel: string
  preventTab?: boolean
}

const Icon: FC<IconProps> = ({ country, onClick, ariaLabel, preventTab }) => {
  const flags = {
    en: <US title="US" />,
    'pt-BR': <BR title="BR" />,
    es: <ES title="ES" />,
    de: <DE title="DE" />,
    fr: <FR title="FR" />,
  }
  return (
    <button
      className="w-10 sm:w-12 cursor-pointer flex flex-col justify-center"
      onClick={onClick}
      aria-label={ariaLabel}
      tabIndex={preventTab ? -1 : 0}
    >
      {flags[country]}
    </button>
  )
}

export const LanguageSelector: FC = () => {
  const [showLanguages, setShowLanguages] = useState(false)
  const { language, setLanguage } = useContext(LanguageContext)
  const t = useTranslations('header')

  const langs: Array<Language> = ['en', 'pt-BR']
  const selectLanguage = (lang: Language): void => {
    setLanguage(lang)
    setShowLanguages(false)
  }

  const flagsClasses = cx(
    'absolute flex flex-row gap-4 h-fit bg-dark p-4 right-0 top-full my-4 transition',
    !showLanguages && 'translate-x-full',
  )

  const Flags = (
    <div className={flagsClasses}>
      {langs.map((lang) => (
        <Icon
          key={lang}
          country={lang}
          onClick={() => selectLanguage(lang)}
          ariaLabel={t(lang)}
          preventTab={!showLanguages}
        />
      ))}
    </div>
  )

  return (
    <div className="my-4 px-4 relative">
      <Icon
        country={language}
        onClick={() => setShowLanguages(true)}
        ariaLabel={t('change-language')}
        preventTab={showLanguages}
      />
      {Flags}
    </div>
  )
}
