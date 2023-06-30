import { AspectRatio } from '@tszhong0411/ui'
import Image from 'next/image'

const AspectRatioDemo = () => {
  return (
    <AspectRatio ratio={16 / 9}>
      <Image
        src='https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1920&q=100'
        alt='Photo by Simon Zhu'
        fill
        className='rounded-md object-cover'
      />
    </AspectRatio>
  )
}

export default AspectRatioDemo
