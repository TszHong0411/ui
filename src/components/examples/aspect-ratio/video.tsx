import { AspectRatio } from '@tszhong0411/ui'

const AspectRatioVideo = () => {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src='https://www.youtube.com/embed/gYO1uk7vIcc'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        className='h-full w-full'
        allowFullScreen
      />
    </AspectRatio>
  )
}

export default AspectRatioVideo
