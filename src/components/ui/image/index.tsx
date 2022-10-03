import { FC } from 'react'
import Image from 'next/image'

interface Props {
  src: string
  width: number
  height: number
  alt?: string
}

export const Img: FC<Props> = ({ src, width, height, alt }) => {
  return (
    <div className={`relative w-${width} h-${height}`}>
      <Image
        src={src}
        layout="fill"
        aria-hidden={alt ? 'false' : 'true'}
        alt={alt || ''}
      />
    </div>
  )
}
