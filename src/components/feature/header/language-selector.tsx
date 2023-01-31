import { Language, LanguageContext } from '@providers'
import { US, BR, ES, DE, FR } from 'country-flag-icons/react/3x2'
import { FC, useContext, useState } from 'react'
import cx from 'classnames'

interface IconProps {
  country: Language
  onClick: () => void
}

const Icon: FC<IconProps> = ({ country, onClick }) => {
  const flags = {
    en: <US title="US" />,
    'pt-BR': <BR title="BR" />,
    es: <ES title="ES" />,
    de: <DE title="DE" />,
    fr: <FR title="FR" />,
  }
  return (
    <button
      className="w-12 cursor-pointer flex flex-col justify-center"
      onClick={onClick}
    >
      {flags[country]}
    </button>
  )
}

export const LanguageSelector: FC = () => {
  const [showLanguages, setShowLanguages] = useState(false)
  const { language, setLanguage } = useContext(LanguageContext)

  const langs: Array<Language> = ['en', 'pt-BR']
  const selectLanguage = (lang: Language): void => {
    setLanguage(lang)
    setShowLanguages(false)
  }

  const currentClasses = cx(
    !showLanguages && 'opacity-1 h-auto',
    showLanguages && 'opacity-0 h-0',
  )
  const flagsClasses = cx(
    'flex flex-row gap-4',
    !showLanguages && 'opacity-0 h-0',
    showLanguages && 'opacity-1 h-auto',
  )
  const wrapperClasses = cx(
    'transition-[max-width] my-4 px-4',
    !showLanguages && 'max-w-[80px]',
    showLanguages && 'max-w-[400px]',
  )

  const Current = (
    <div className={currentClasses}>
      <Icon country={language} onClick={() => setShowLanguages(true)} />
    </div>
  )
  const Flags = (
    <div className={flagsClasses}>
      {langs.map((lang) => (
        <Icon key={lang} country={lang} onClick={() => selectLanguage(lang)} />
      ))}
    </div>
  )

  return (
    <div className={wrapperClasses}>
      {Flags}
      {Current}
    </div>
  )
}
