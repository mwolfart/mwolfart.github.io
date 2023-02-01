import { repositories } from '@constants'
import { FC } from 'react'
import { useTranslations } from 'use-intl'
import { DetailsWrapper } from './wrapper'

export const DaveDetails: FC = () => {
  const t = useTranslations('projects')
  const technologies = [t('tech.python')]
  return (
    <DetailsWrapper
      title={t('dave')}
      technologies={technologies}
      repoUrl={repositories.dave}
    >
      <p>{t('daveP1')}</p>
      <p>{t('daveP2')}</p>
      <p>{t('daveP3')}</p>
    </DetailsWrapper>
  )
}
