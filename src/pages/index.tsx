import { Intro, About, Projects, Contact } from '@feature-components'
import { ScrollContext } from '@providers'
import Head from 'next/head'
import { useContext } from 'react'
import { ReactNode } from 'react'
import { useTranslations } from 'use-intl'

export default function Home(): ReactNode {
  const { refs } = useContext(ScrollContext)
  const t = useTranslations('header')

  return (
    <div className="h-full overflow-x-hidden">
      <Head>
        <title>{t('page-title')}</title>
      </Head>
      <Intro ref={refs[0]} />
      <About ref={refs[1]} />
      <Projects ref={refs[2]} />
      <Contact ref={refs[3]} />
    </div>
  )
}
