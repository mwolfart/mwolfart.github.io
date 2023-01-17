import { ScrollContext } from '@providers'
import { Button } from '@ui-components'
import { useContext } from 'react'
import { FC } from 'react'
import { useTranslations } from 'use-intl'

export const Header: FC = () => {
  const t = useTranslations('header')
  const { scrollTo } = useContext(ScrollContext)
  return (
    <div
      className={`w-full h-fit bg-dark flex flex-row justify-end
      child:border-r-2 child:border-lightblue child-last:border-none`}
    >
      <Button onClick={() => scrollTo(0)}>{t('home')}</Button>
      <Button onClick={() => scrollTo(1)}>{t('about')}</Button>
      <Button onClick={() => scrollTo(2)}>{t('projects')}</Button>
      <Button onClick={() => scrollTo(3)}>{t('contact')}</Button>
    </div>
  )
}
