import { forwardRef } from 'react'
import { useTranslations } from 'use-intl'
import { Img } from '@ui-components'

export const About = forwardRef<HTMLDivElement>((_, ref) => {
  const t = useTranslations('about')
  const Title = (
    <h2 className="text-white border-b-2 border-lightblue w-fit pb-8">
      {t('title')}
    </h2>
  )
  return (
    <div className="md:pr-24 md:py-12" ref={ref}>
      <div className="bg-dark p-8 md:p-16 flex flex-col lg:flex-row gap-8">
        <div className="lg:hidden self-center">{Title}</div>
        <div className="p-4 my-4 border-2 border-primary self-center h-fit w-fit lg:self-start lg:my-0">
          <Img src="/images/profile-2x.jpg" width="w-60" height="h-72" />
        </div>
        <div className="flex flex-col gap-8">
          <div className="hidden lg:block">{Title}</div>
          <p className="text-md">{t('paragraphOne')}</p>
          <p className="text-md text-primary">{t('paragraphTwo')}</p>
          <p className="text-md">{t('paragraphThree')}</p>
        </div>
      </div>
    </div>
  )
})
