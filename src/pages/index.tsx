import { ReactNode } from 'react'
import { useTranslations } from 'use-intl'
import { Img } from '@ui-components'

export default function Home(): ReactNode {
  const t = useTranslations('home')
  const description = t.rich('description', {
    span: (children) => <span className="text-primary">{children}</span>,
  })
  return (
    <div className="h-screen">
      <div className="home-shape bg-dark flex flex-row py-24 pl-40 pr-24 mb-32">
        <div className="pt-8 flex-grow">
          <span className="text-md text-lightblue">{t('prefix')}</span>
          <h1 className="flex-grow">{t('title')}</h1>
        </div>
        <Img src="/images/computer.png" width={64} height={64} />
      </div>
      <div className="pl-40 pr-24 h-full">
        <p className="text-xl">{description}</p>
      </div>
    </div>
  )
}
