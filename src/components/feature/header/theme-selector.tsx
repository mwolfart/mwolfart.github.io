import { BsSun, BsMoon, BsLaptop } from 'react-icons/bs'
import { FC } from 'react'
import { Button } from '@ui-components'
import { useTheme } from 'next-themes'
import { useTranslations } from 'use-intl'

export const ThemeSelector: FC = () => {
  const { theme, setTheme } = useTheme()
  const t = useTranslations('header')
  const onToggleTheme = (): void => {
    theme === 'dark'
      ? setTheme('')
      : theme === 'light'
      ? setTheme('dark')
      : setTheme('light')
  }

  return (
    <Button
      onClick={onToggleTheme}
      className="my-4 px-6"
      aria-label={t('change-theme')}
      title={t('change-theme')}
    >
      {theme === 'light' ? (
        <BsSun />
      ) : theme === 'dark' ? (
        <BsMoon />
      ) : (
        <BsLaptop />
      )}
    </Button>
  )
}
