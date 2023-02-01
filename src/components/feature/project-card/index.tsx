import { FC, useState } from 'react'
import { Img } from '@ui-components'
import cx from 'classnames'
import { useTranslations } from 'use-intl'

interface Props {
  imageSrc: string
  title: string
  description: string
  onClick: () => void
}

export const ProjectCard: FC<Props> = ({
  imageSrc,
  title,
  description,
  onClick,
}) => {
  const t = useTranslations('projects')
  const [hasTransition, setTransition] = useState(true)
  const wrapperClasses = cx(
    'text-left flex flex-col bg-lightblue w-full md:w-half-gap-8 lg:w-96 cursor-pointer transition',
    hasTransition && 'hover:scale-110',
  )
  const click = (): void => {
    setTransition(false)
    onClick()
    setTimeout(() => setTransition(true), 500)
  }
  return (
    <button
      className={wrapperClasses}
      onClick={click}
      aria-label={t('view-details')}
    >
      <Img src={imageSrc} width="w-full" height="h-40" />
      <div className="p-4 flex flex-col gap-4">
        {title.length > 12 ? <h5>{title}</h5> : <h3>{title}</h3>}
        <p>{description}</p>
      </div>
    </button>
  )
}
