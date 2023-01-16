import { FC } from 'react'
import Image from 'next/image'

interface Props {
  src: string
  width: string
  height: string
  alt?: string
}

export const Img: FC<Props> = ({ src, width, height, alt }) => {
  const classes = `relative ${width} ${height}`
  return (
    <div className={classes}>
      <Image
        className="object-cover"
        src={src}
        fill={true}
        aria-hidden={alt ? 'false' : 'true'}
        alt={alt || ''}
      />
    </div>
  )
}
