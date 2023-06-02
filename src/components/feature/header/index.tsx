import {
  RiHome4Line,
  RiContactsBookLine,
  RiClapperboardLine,
} from 'react-icons/ri'
import { BsPersonSquare } from 'react-icons/bs'
import { useContext } from 'react'
import { FC } from 'react'
import { useTranslations } from 'use-intl'
import { ScrollContext } from '@providers'
import { Button } from '@ui-components'
import { LanguageSelector } from './language-selector'
import { ThemeSelector } from './theme-selector'

export const Header: FC = () => {
  const t = useTranslations('header')
  const { scrollTo } = useContext(ScrollContext)

  const containerClasses = `relative h-fit bg-dark flex flex-row justify-end
  child:border-r-2 child:border-lightblue child-last:border-none overflow-none`

  const tablet = 'hidden sm:block'
  const mobile = 'block sm:hidden'

  return (
    <div className="fixed z-10 w-full">
      <nav className={containerClasses}>
        <Button onClick={() => scrollTo(0)} className={tablet}>
          {t('home')}
        </Button>
        <Button onClick={() => scrollTo(1)} className={tablet}>
          {t('about')}
        </Button>
        <Button onClick={() => scrollTo(2)} className={tablet}>
          {t('projects')}
        </Button>
        <Button onClick={() => scrollTo(3)} className={tablet}>
          {t('contact')}
        </Button>
        <Button
          onClick={() => scrollTo(0)}
          className={mobile}
          aria-label={t('home')}
        >
          <RiHome4Line size={28} />
        </Button>
        <Button
          onClick={() => scrollTo(1)}
          className={mobile}
          aria-label={t('about')}
        >
          <BsPersonSquare size={24} />
        </Button>
        <Button
          onClick={() => scrollTo(2)}
          className={mobile}
          aria-label={t('projects')}
        >
          <RiClapperboardLine size={28} />
        </Button>
        <Button
          onClick={() => scrollTo(3)}
          className={mobile}
          aria-label={t('contact')}
        >
          <RiContactsBookLine size={28} />
        </Button>
        <LanguageSelector />
        <ThemeSelector />
      </nav>
    </div>
  )
}
