import { Separator } from '@tszhong0411/ui'

const SeparatorDemo = () => {
  return (
    <div>
      <h4>Radix Primitive</h4>
      <p className='text-sm text-accent-5'>
        An open-source UI component library
      </p>
      <Separator className='my-4' />
      <div className='flex h-5 items-center space-x-4'>
        <div>Blog</div>
        <Separator orientation='vertical' />
        <div>Docs</div>
        <Separator orientation='vertical' />
        <div>Source</div>
      </div>
    </div>
  )
}

export default SeparatorDemo
