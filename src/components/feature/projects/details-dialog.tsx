import { Button } from '@ui-components'
import { FC, ReactNode } from 'react'
import { useTranslations } from 'use-intl'
import cx from 'classnames'

interface Props {
  content: ReactNode
  isOpen: boolean
  onClose: () => void
}

export const ProjectDetailsDialog: FC<Props> = ({
  content,
  isOpen,
  onClose,
}) => {
  const t = useTranslations('projects')
  const detailsWrapperClasses = cx(
    'fixed md:absolute transition top-0 bottom-0 w-full bg-lightblue z-10 left-0 flex flex-col md:p-16',
    !isOpen &&
      'translate-x-[600px] sm:translate-x-[1200px] md:translate-x-[2000px]',
  )

  return (
    <div className={detailsWrapperClasses}>
      <div className="flex-grow p-10 md:p-0 overflow-y-auto">{content}</div>
      <Button variant="outlined" className="mx-auto" onClick={onClose}>
        {t('close')}
      </Button>
    </div>
  )
}
