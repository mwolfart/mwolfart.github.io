import { repositories } from '@constants'
import { FC } from 'react'
import { useTranslations } from 'use-intl'
import { DetailsWrapper } from './wrapper'

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
    <DetailsWrapper
      title={t('portfolio')}
      technologies={technologies}
      repoUrl={repositories.portfolio}
    >
      <p>{t('portfolioP1')}</p>
    </DetailsWrapper>
  )
}
