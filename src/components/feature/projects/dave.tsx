import { repositories } from '@constants'
import { FC } from 'react'
import { useTranslations } from 'use-intl'

export const DaveDetails: FC = () => {
  const t = useTranslations('projects')
  const technologies = [t('tech.python')]
  return (
    <div className="flex flex-col gap-4">
      <h3 className="pb-4 border-b-2 border-primary w-fit">{t('dave')}</h3>
      <p>{t('daveP1')}</p>
      <p>{t('daveP2')}</p>
      <p>{t('daveP3')}</p>
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
              href={repositories.dave}
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
