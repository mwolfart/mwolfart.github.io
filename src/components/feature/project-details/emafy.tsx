import { repositories } from '@constants'
import { FC } from 'react'
import { useTranslations } from 'use-intl'
import { DetailsWrapper } from './wrapper'

export const EmafyDetails: FC = () => {
  const t = useTranslations('projects')
  const technologies = [
    t('tech.react'),
    t('tech.styled'),
    t('tech.ts'),
    t('tech.prettier'),
    t('tech.jest'),
    t('tech.cra'),
    t('tech.parcel'),
  ]
  return (
    <DetailsWrapper
      title={t('emafy')}
      technologies={technologies}
      repoUrl={repositories.emafy}
    >
      <p>{t('emafyP1')}</p>
      <p>{t('emafyP2')}</p>
      <p>{t('emafyP3')}</p>
      <p>
        {t.rich('emafyP3', {
          a: (children) => (
            <a
              href="https://mwolfart.github.io/emafy/"
              target="_blank"
              rel="noreferrer"
              className="transition underline hover:decoration-transparent"
            >
              {children}
            </a>
          ),
        })}
      </p>
    </DetailsWrapper>
  )
}
