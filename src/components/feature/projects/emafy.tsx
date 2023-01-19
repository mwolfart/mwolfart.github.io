import { FC } from 'react'
import { useTranslations } from 'use-intl'

export const EmafyDetails: FC = () => {
  const t = useTranslations('projects')
  const technologies = [
    t('tech.react'),
    t('tech.styled'),
    t('tech.cra'),
    t('tech.jest'),
  ]
  return (
    <div>
      <p>{t('emafyLongDescription')}</p>
      <h4>{t('technologiesUsed')}</h4>
    </div>
  )
}
