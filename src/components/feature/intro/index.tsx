import { FC } from 'react'
import { useTranslations } from 'use-intl'
import { Img } from '@ui-components'

export const Intro: FC = () => {
  const t = useTranslations('home')
  const description = t.rich('description', {
    span: (children) => <span className="text-primary">{children}</span>,
  })
  return (
    <div className="h-screen">
      <div className="bg-dark flex flex-col items-center p-12 sm:pt-24 md:items-start md:flex-row md:home-title-shape lg:pl-40">
        <div className="py-8 flex-grow text-center md:pb-0 sm:text-left">
          <span className="text-sm md:text-md text-lightblue">
            {t('prefix')}
          </span>
          <h1 className="flex-grow">{t('title')}</h1>
        </div>
        <Img src="/images/computer.png" width="w-64" height="h-64" />
      </div>
      <div className="relative md:top-24 p-12 sm:p-24 lg:pl-40 md:w-2/3">
        <p className="text-xl">{description}</p>
      </div>
    </div>
  )
}
