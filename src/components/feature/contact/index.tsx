import { FC } from 'react'
import { useTranslations } from 'use-intl'
import { ContactCard } from '../contact-card'
import { BsLinkedin, BsGithub, BsArrowUp } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { Button } from '@ui-components'

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

export const Contact: FC = () => {
  const t = useTranslations('contact')
  return (
    <div>
      <div className="md:pl-24 md:py-12">
        <div className="bg-dark p-8 md:p-16 flex flex-col gap-8">
          <h1 className="text-primary border-b-2 border-lightblue w-fit pb-8">
            {t('title')}
          </h1>
          <p className="text-md">{t('description')}</p>
          <div className="flex flex-row flex-wrap">
            <ContactCard
              title={t('linkedin')}
              urlText={urls.linkedin.text}
              url={urls.linkedin.url}
              iconElement={<BsLinkedin size={96} />}
            />
            <ContactCard
              title={t('github')}
              urlText={urls.github.text}
              url={urls.github.url}
              iconElement={<BsGithub size={96} />}
            />
            <ContactCard
              title={t('email')}
              urlText={urls.email.text}
              url={urls.email.url}
              iconElement={<MdEmail size={96} />}
            />
          </div>
        </div>
      </div>
      <div className="mb-8 text-center">
        <Button className="text-primary font-bold hover:text-lightblue">
          <BsArrowUp size={32} className="w-fit mx-auto mb-2" />
          {t('back-to-top')}
        </Button>
      </div>
    </div>
  )
}
