import { forwardRef, ReactNode, useState } from 'react'
import { useTranslations } from 'use-intl'
import { ProjectCard } from '@feature-components'
import { EmafyDetails } from './emafy'
import cx from 'classnames'
import { Button } from '@ui-components'

export const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  const t = useTranslations('projects')
  const [showDetails, setShowDetails] = useState(false)
  const [detailsContent, setDetailsContent] = useState<ReactNode>()

  const detailsElements = [<EmafyDetails key={0} />]

  const onOpenDetails = (id: number): void => {
    if (id < detailsElements.length) {
      setDetailsContent(detailsElements[id])
      setShowDetails(true)
    }
  }

  const detailsWrapperClasses = cx(
    'absolute transition w-full top-0 bottom-0 bg-lightblue z-10 left-0 flex flex-col p-16',
    !showDetails && 'translate-x-[2000px]',
  )

  const DetailsDialog = (
    <div className={detailsWrapperClasses}>
      <div className="flex-grow">{detailsContent}</div>
      <Button
        variant="outlined"
        className="mx-auto"
        onClick={() => setShowDetails(false)}
      >
        {t('close')}
      </Button>
    </div>
  )

  return (
    <div className="p-8 sm:p-16 flex flex-col gap-16" ref={ref}>
      <h2 className="pb-8 border-b-2 border-primary w-fit">{t('title')}</h2>
      <div className="relative flex flex-row flex-wrap gap-8">
        {DetailsDialog}
        <ProjectCard
          imageSrc="/images/emafy.jpg"
          title={t('emafy')}
          description={t('emafyDescription')}
          onClick={() => onOpenDetails(0)}
        />
        <ProjectCard
          imageSrc="/images/portfolio.jpg"
          title={t('portfolio')}
          description={t('portfolioDescription')}
          onClick={() => onOpenDetails(1)}
        />
        <ProjectCard
          imageSrc="/images/patas.jpg"
          title={t('patas')}
          description={t('patasDescription')}
          onClick={() => onOpenDetails(2)}
        />
        <ProjectCard
          imageSrc="/images/cow.jpg"
          title={t('cow')}
          description={t('cowDescription')}
          onClick={() => onOpenDetails(3)}
        />
        <ProjectCard
          imageSrc="/images/dave.jpg"
          title={t('dave')}
          description={t('daveDescription')}
          onClick={() => onOpenDetails(4)}
        />
      </div>
    </div>
  )
})
