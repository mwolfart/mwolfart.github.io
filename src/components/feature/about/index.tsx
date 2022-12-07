import { FC } from 'react'
import { useTranslations } from 'use-intl'
import { Img } from '@ui-components'

export const About: FC = () => {
  const t = useTranslations('about')
  return (
    <div className="md:pr-24 md:py-12">
      <div className="bg-dark p-8 flex flex-row gap-8">
        <div className="p-4 border-2 border-primary h-fit">
          <Img src="/images/profile-2x.jpg" width="w-60" height="h-72" />
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-white border-b-2 border-lightblue w-fit pb-8">
            {t('title')}
          </h1>
          <p className="text-md">{t('paragraphOne')}</p>
          <p className="text-md text-primary">{t('paragraphTwo')}</p>
          <p className="text-md">{t('paragraphThree')}</p>
        </div>
      </div>
    </div>
  )
}
