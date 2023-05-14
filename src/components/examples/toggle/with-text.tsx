import { IconBold, Toggle } from '@tszhong0411/ui'

const ToggleWithText = () => {
  return (
    <Toggle aria-label='Toggle italic'>
      <IconBold size={16} className='mr-2' />
      Bold
    </Toggle>
  )
}

export default ToggleWithText
