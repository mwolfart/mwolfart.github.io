import { repositories } from '@constants'
import { FC } from 'react'
import { useTranslations } from 'use-intl'

export const CowDetails: FC = () => {
  const t = useTranslations('projects')
  const technologies = [t('tech.cpp'), t('tech.opengl')]
  return (
    <div className="flex flex-col gap-4">
      <h3 className="pb-4 border-b-2 border-primary w-fit">{t('cow')}</h3>
      <p>{t('cowP1')}</p>
      <p>{t('cowP2')}</p>
      <p>{t('cowP3')}</p>
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
              href={repositories.cow}
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
