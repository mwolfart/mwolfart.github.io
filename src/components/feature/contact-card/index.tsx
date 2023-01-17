import { FC, ReactNode } from 'react'

interface Props {
  iconElement: ReactNode
  title: string
  url: string
  urlText: string
}

export const ContactCard: FC<Props> = ({
  iconElement,
  title,
  url,
  urlText,
}) => (
  <div>
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="hover:scale-110 cursor-pointer transition flex flex-col gap-8 text-center"
    >
      <h3 className="text-lightblue">{title}</h3>
      <div className="w-fit mx-auto">{iconElement}</div>
      <small>{urlText}</small>
    </a>
  </div>
)
