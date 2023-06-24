import { IconBold } from '@tabler/icons-react'
import { Toggle } from '@codewithhong/ui'

const ToggleWithText = () => {
  return (
    <Toggle aria-label='Toggle italic'>
      <IconBold size={16} className='mr-2' />
      Bold
    </Toggle>
  )
}

export default ToggleWithText
