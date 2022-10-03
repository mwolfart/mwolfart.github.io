import { Button } from '@ui-components'
import { FC } from 'react'
import { useTranslations } from 'use-intl'

export const Header: FC = () => {
  const t = useTranslations('header')
  return (
    <div
      className={`fixed top-0 w-full h-fit bg-dark flex flex-row justify-end
      z-10 child:border-r-2 child:border-lightblue child-last:border-none`}
    >
      <Button>{t('home')}</Button>
      <Button>{t('about')}</Button>
      <Button>{t('projects')}</Button>
      <Button>{t('contact')}</Button>
    </div>
  )
}
