import { AspectRatio } from '@tszhong0411/ui'

const AspectRatioMap = () => {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236161.11980830412!2d113.9628909831798!3d22.352968179881678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403fefda2ea2807%3A0x486db43574f494da!2z6aaZ5riv!5e0!3m2!1sen-US!2shk!4v1683459071155!5m2!1sen-US!2shk'
        title='Google map'
        className='h-full w-full'
      ></iframe>
    </AspectRatio>
  )
}

export default AspectRatioMap
