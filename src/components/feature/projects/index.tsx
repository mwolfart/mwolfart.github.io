import { forwardRef } from 'react'
import { useTranslations } from 'use-intl'
import { ProjectCard } from '@feature-components'
import cx from 'classnames'

export const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  const t = useTranslations('projects')
  return (
    <div className="p-8 lg:p-16 flex flex-col gap-16" ref={ref}>
      <h2 className="pb-8 border-b-2 border-primary w-fit">{t('title')}</h2>
      <div
        className={cx(
          'flex flex-row flex-wrap gap-8',
          'lg:[&>*]:hidden',
          'lg:[&>*:nth-child(-n+4)]:block',
          '2xl:[&>*:nth-child(-n+6)]:block',
          '3xl:[&>*:nth-child(-n+8)]:block',
        )}
      >
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
        <ProjectCard
          imageSrc="/images/patas.jpg"
          title={t('patas')}
          description={t('patasDescription')}
        />
        <ProjectCard
          imageSrc="/images/cow.jpg"
          title={t('cow')}
          description={t('cowDescription')}
        />
        <ProjectCard
          imageSrc="/images/dave.jpg"
          title={t('dave')}
          description={t('daveDescription')}
        />
      </div>
    </div>
  )
})
