import { FC } from 'react'
import { useTranslations } from 'use-intl'

export const EmafyDetails: FC = () => {
  const t = useTranslations('projects')
  const technologies = [
    t('tech.react'),
    t('tech.styled'),
    t('tech.ts'),
    t('tech.prettier'),
    t('tech.jest'),
    t('tech.cra'),
  ]
  return (
    <div className="p-16">
      <p>{t('emafyLongDescription')}</p>
      <h4>{t('technologiesUsed')}</h4>
      <ul>
        {technologies.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}
