import { repositories } from '@constants'
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
    t('tech.parcel'),
  ]
  return (
    <div className="flex flex-col gap-4">
      <h3 className="pb-4 border-b-2 border-primary w-fit">{t('emafy')}</h3>
      <p>{t('emafyP1')}</p>
      <p>{t('emafyP2')}</p>
      <p>{t('emafyP3')}</p>
      <h4 className="text-primary">{t('technologiesUsed')}</h4>
      <ul>
        {technologies.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <p className="text-primary text-md">
        {t.rich('viewRepo', {
          a: (children) => (
            <a
              href={repositories.emafy}
              target="_blank"
              rel="noreferrer"
              className="underline transition decoration-primary hover:decoration-transparent"
            >
              {children}
            </a>
          ),
        })}
      </p>
    </div>
  )
}