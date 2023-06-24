import { Toggle } from '@codewithhong/ui'
import { IconBold } from '@tabler/icons-react'

const ToggleWithText = () => {
  return (
    <Toggle aria-label='Toggle italic'>
      <IconBold size={16} className='mr-2' />
      Bold
    </Toggle>
  )
}

export default ToggleWithText
