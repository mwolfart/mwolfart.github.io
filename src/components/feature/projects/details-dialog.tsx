import { Button } from '@ui-components'
import { FC, ReactNode, useEffect, useState } from 'react'
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
  const [hideDialog, setHideDialog] = useState(true)
  const [windowWidth, setWindowWidth] = useState<number>()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const onResize = (): void => {
        setWindowWidth(window.innerWidth)
      }
      window.addEventListener('resize', onResize)
      return () => {
        window.removeEventListener('resize', onResize)
      }
    }
    return
  }, [])

  // Hack for transitioning while making tabbing consistent
  // Only applies for desktop
  useEffect(() => {
    const toggleVisibility = async (): Promise<void> => {
      if (!isOpen && !hideDialog) {
        await new Promise((resolve) => setTimeout(resolve, 200))
        setHideDialog(true)
      } else if (isOpen && hideDialog) {
        setHideDialog(false)
      }
    }
    toggleVisibility()
  }, [hideDialog, isOpen])

  const detailsWrapperClasses = cx(
    'fixed 2xl:absolute transition top-0 bottom-0 w-full bg-midblue',
    'dark:bg-lightblue z-20 2xl:z-10 left-0 flex flex-col md:p-16 visible',
    !isOpen &&
      'translate-x-[600px] sm:translate-x-[1200px] md:translate-x-[2000px] max-2xl:invisible',
    hideDialog && '2xl:invisible',
  )

  return (
    <FocusTrap active={!!windowWidth && windowWidth < 1440 && isOpen}>
      <div className={detailsWrapperClasses}>
        <div className="flex-grow p-10 md:p-0 overflow-y-auto">{content}</div>
        <Button variant="outlined" className="mx-auto" onClick={onClose}>
          {t('close')}
        </Button>
      </div>
    </FocusTrap>
  )
}
