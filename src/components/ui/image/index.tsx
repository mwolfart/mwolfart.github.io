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
  console.log(classes)
  return (
    <div className={classes}>
      <Image
        src={src}
        layout="fill"
        aria-hidden={alt ? 'false' : 'true'}
        alt={alt || ''}
      />
    </div>
  )
}
