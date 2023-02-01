import { repositories } from '@constants'
import { FC } from 'react'
import { useTranslations } from 'use-intl'
import { ProjectDetails } from '../details'

export const PortfolioDetails: FC = () => {
  const t = useTranslations('projects')
  const technologies = [
    t('tech.react'),
    t('tech.next'),
    t('tech.tailwind'),
    t('tech.ts'),
    t('tech.prettier'),
  ]
  return (
    <ProjectDetails
      title={t('portfolio')}
      technologies={technologies}
      repoUrl={repositories.portfolio}
    >
      <p>{t('portfolioP1')}</p>
    </ProjectDetails>
  )
}
