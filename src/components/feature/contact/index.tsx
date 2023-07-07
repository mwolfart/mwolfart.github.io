import { forwardRef } from 'react'
import { useTranslations } from 'use-intl'
import { ContactCard } from '../contact-card'
import { BsLinkedin, BsGithub, BsArrowUp } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { Button } from '@ui-components'
import { useContext } from 'react'
import { ScrollContext } from '@providers'

const urls = {
  linkedin: {
    text: 'linkedin.com/in/murilo-wolfart/',
    url: 'https://www.linkedin.com/in/murilo-wolfart/',
  },
  github: {
    text: 'github.com/mwolfart',
    url: 'https://www.github.com/mwolfart',
  },
  email: {
    text: 'mwolfart@gmail.com',
    url: 'mailto:mwolfart@gmail.com',
  },
}

export const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  const t = useTranslations('contact')
  const { scrollTo } = useContext(ScrollContext)
  const iconSizes = 'text-[56px] sm:text-[96px]'
  return (
    <div ref={ref}>
      <div className="md:pl-24 md:pt-12 md:pb-4 3xl:pb-12">
        <div className="bg-dark p-8 md:p-16 xl:pr-64 flex flex-col gap-8">
          <h1 className="text-primary border-b-2 border-lightblue w-fit pb-8">
            {t('title')}
          </h1>
          <p className="text-md">{t('description')}</p>
          <div className="flex flex-row flex-wrap gap-8 justify-around lg:w-full">
            <ContactCard
              title={t('linkedin')}
              urlText={urls.linkedin.text}
              url={urls.linkedin.url}
              iconElement={<BsLinkedin className={iconSizes} />}
            />
            <ContactCard
              title={t('github')}
              urlText={urls.github.text}
              url={urls.github.url}
              iconElement={<BsGithub className={iconSizes} />}
            />
            <ContactCard
              title={t('email')}
              urlText={urls.email.text}
              url={urls.email.url}
              iconElement={<MdEmail className={iconSizes} />}
            />
          </div>
        </div>
      </div>
      <div className="mb-8 text-center">
        <Button className="font-bold" onClick={() => scrollTo(0)}>
          <BsArrowUp size={32} className="w-fit mx-auto m-2" />
          {t('back-to-top')}
        </Button>
      </div>
    </div>
  )
})
