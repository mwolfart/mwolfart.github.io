import { FC, PropsWithChildren } from 'react'
import { useTranslations } from 'use-intl'

interface Props extends PropsWithChildren {
  title: string
  technologies: Array<string>
  repoUrl: string
}

export const DetailsWrapper: FC<Props> = ({
  title,
  technologies,
  repoUrl,
  children,
}) => {
  const t = useTranslations('projects')
  return (
    <div className="flex flex-col gap-4">
      <h3 className="pb-4 border-b-2 border-primary w-fit">{title}</h3>
      {children}
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
              href={repoUrl}
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
