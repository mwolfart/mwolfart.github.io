import { forwardRef, ReactNode, useState } from 'react'
import { useTranslations } from 'use-intl'
import { ProjectCard } from '@feature-components'
import { ProjectDetailsDialog } from './details-dialog'
import {
  CowDetails,
  DaveDetails,
  EmafyDetails,
  PatasDetails,
  PortfolioDetails,
} from '@feature-components'
import { ExpensableDetails } from '../project-details/expensable'

export const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  const t = useTranslations('projects')
  const [showDetails, setShowDetails] = useState(false)
  const [detailsContent, setDetailsContent] = useState<ReactNode>()

  const onOpenDetails = (id: number): void => {
    if (id < detailsElements.length) {
      setDetailsContent(detailsElements[id])
      setShowDetails(true)
    }
  }

  const detailsElements = [
    <EmafyDetails key={0} />,
    <ExpensableDetails key={1} />,
    <PortfolioDetails key={2} />,
    <PatasDetails key={3} />,
    <CowDetails key={4} />,
    <DaveDetails key={5} />,
  ]

  const projects = [
    { id: 0, name: 'emafy', title: t('emafy'), desc: t('emafyDescription') },
    {
      id: 1,
      name: 'expensable',
      title: t('expensable'),
      desc: t('expensableDescription'),
    },
    {
      id: 2,
      name: 'portfolio',
      title: t('portfolio'),
      desc: t('portfolioDescription'),
    },
    { id: 3, name: 'patas', title: t('patas'), desc: t('patasDescription') },
    { id: 4, name: 'cow', title: t('cow'), desc: t('cowDescription') },
    { id: 5, name: 'dave', title: t('dave'), desc: t('daveDescription') },
  ]

  return (
    <div className="p-8 sm:p-16 flex flex-col gap-16" ref={ref}>
      <h2 className="pb-8 border-b-2 border-primary w-fit">{t('title')}</h2>
      <div className="relative flex flex-row flex-wrap gap-8">
        {projects.map(({ id, name, title, desc }) => (
          <ProjectCard
            key={id}
            imageSrc={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/${name}.jpg`}
            title={title}
            description={desc}
            onClick={() => onOpenDetails(id)}
            disableNavigation={showDetails}
          />
        ))}
        <ProjectDetailsDialog
          content={detailsContent}
          isOpen={showDetails}
          onClose={() => setShowDetails(false)}
        />
      </div>
    </div>
  )
})
