import { repositories } from '@constants'
import { FC } from 'react'
import { useTranslations } from 'use-intl'
import { DetailsWrapper } from './wrapper'

export const ExpensableDetails: FC = () => {
  const t = useTranslations('projects')
  const technologies = [
    t('tech.react'),
    t('tech.remix'),
    t('tech.prisma'),
    t('tech.mongodb'),
    t('tech.tailwind'),
    t('tech.ts'),
    t('tech.prettier'),
  ]
  return (
    <DetailsWrapper
      title={t('expensable')}
      technologies={technologies}
      repoUrl={repositories.expensable}
    >
      <p>{t('expensableP1')}</p>
      <p>{t('expensableP2')}</p>
      <p>{t('expensableP3')}</p>
    </DetailsWrapper>
  )
}
