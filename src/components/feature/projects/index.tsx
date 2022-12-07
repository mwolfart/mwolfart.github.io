import { FC } from 'react'
import { useTranslations } from 'use-intl'
import { ProjectCard } from '@feature-components'

export const Projects: FC = () => {
  const t = useTranslations('projects')
  return (
    <div className="p-8 lg:p-16 flex flex-col gap-16">
      <h2 className="pb-8 border-b-2 border-primary w-fit">{t('title')}</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          imageSrc="/images/emafy.jpg"
          title={t('emafy')}
          description={t('emafyDescription')}
        />
        <ProjectCard
          imageSrc="/images/portfolio.jpg"
          title={t('portfolio')}
          description={t('portfolioDescription')}
        />
      </div>
    </div>
  )
}
