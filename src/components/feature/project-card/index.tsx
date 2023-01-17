import { FC } from 'react'
import { Img } from '@ui-components'

interface Props {
  imageSrc: string
  title: string
  description: string
}

export const ProjectCard: FC<Props> = ({ imageSrc, title, description }) => (
  <div className="bg-lightblue w-96 hover:scale-110 cursor-pointer transition">
    <Img src={imageSrc} width="w-full" height="h-40" />
    <div className="p-4 flex flex-col gap-4">
      {title.length > 12 ? <h5>{title}</h5> : <h3>{title}</h3>}
      <p>{description}</p>
    </div>
  </div>
)
