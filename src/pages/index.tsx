import { ReactNode } from 'react'
import Image from 'next/image'
import { useTranslations } from 'use-intl'

export default function Home(): ReactNode {
  const t = useTranslations('home')
  const description = t.rich('description', {
    span: (children) => <span>{children}</span>,
  })
  return (
    <>
      <div className="home-shape bg-dark flex flex-row py-24 pl-40 pr-24 mb-24">
        <div className="pt-8 flex-grow">
          <span className="text-md text-lightblue">{t('prefix')}</span>
          <h1 className="flex-grow">{t('title')}</h1>
        </div>
        <div className="relative w-64 h-64">
          <Image
            src="/images/computer.png"
            layout="fill"
            aria-hidden="true"
            alt=""
          />
        </div>
      </div>
      <div className="pl-40 pr-24">
        <p className="text-xl">{description}</p>
      </div>
    </>
  )
}
