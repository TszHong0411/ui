import { Kbd } from '@tszhong0411/ui'

const KbdDemo = () => {
  return (
    <div className='flex flex-col gap-2'>
      <Kbd meta />
      <Kbd shift />
      <Kbd alt />
      <Kbd ctrl />
      <Kbd meta shift>
        b
      </Kbd>
    </div>
  )
}

export default KbdDemo
