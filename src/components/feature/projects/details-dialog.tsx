import { Button } from '@ui-components'
import { FC, ReactNode, useRef } from 'react'
import { useTranslations } from 'use-intl'
import cx from 'classnames'
import FocusTrap from 'focus-trap-react'

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
  const windowWidth = useRef(typeof window !== 'undefined' && window.innerWidth)
  const detailsWrapperClasses = cx(
    'fixed md:absolute transition top-0 bottom-0 w-full bg-midblue dark:bg-lightblue z-10 left-0 flex flex-col md:p-16 visible',
    !isOpen &&
      'translate-x-[600px] sm:translate-x-[1200px] md:translate-x-[2000px] invisible',
  )

  return (
    <FocusTrap active={windowWidth && windowWidth.current < 768 && isOpen}>
      <div className={detailsWrapperClasses}>
        <div className="flex-grow p-10 md:p-0 overflow-y-auto">{content}</div>
        <Button variant="outlined" className="mx-auto" onClick={onClose}>
          {t('close')}
        </Button>
      </div>
    </FocusTrap>
  )
}