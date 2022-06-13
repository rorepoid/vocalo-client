import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

type ImageWithFallbackProps = & ImageProps & {
  src: string
  fallbackSrc: string
}

export const ImageWithFallback: React.FunctionComponent<ImageWithFallbackProps> = ({ src, fallbackSrc, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => { setImgSrc(fallbackSrc) }}
    />
  )
}
