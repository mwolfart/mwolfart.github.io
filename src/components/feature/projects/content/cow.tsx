import { repositories } from '@constants'
import { FC } from 'react'
import { useTranslations } from 'use-intl'
import { ProjectDetails } from '../details'

export const CowDetails: FC = () => {
  const t = useTranslations('projects')
  const technologies = [t('tech.cpp'), t('tech.opengl')]
  return (
    <ProjectDetails
      title={t('cow')}
      technologies={technologies}
      repoUrl={repositories.cow}
    >
      <p>{t('cowP1')}</p>
      <p>{t('cowP2')}</p>
      <p>{t('cowP3')}</p>
    </ProjectDetails>
  )
}
