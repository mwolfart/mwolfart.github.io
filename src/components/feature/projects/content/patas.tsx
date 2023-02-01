import { repositories } from '@constants'
import { FC } from 'react'
import { useTranslations } from 'use-intl'
import { ProjectDetails } from '../details'

export const PatasDetails: FC = () => {
  const t = useTranslations('projects')
  const technologies = [
    t('tech.jquery'),
    t('tech.bootstrap'),
    t('tech.postgres'),
    t('tech.java'),
  ]
  return (
    <ProjectDetails
      title={t('patas')}
      technologies={technologies}
      repoUrl={repositories.patas}
    >
      <p>{t('patasP1')}</p>
      <p>{t('patasP2')}</p>
      <p>{t('patasP3')}</p>
    </ProjectDetails>
  )
}
