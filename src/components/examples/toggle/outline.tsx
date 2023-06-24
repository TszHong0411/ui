import { Toggle } from '@codewithhong/ui'
import { IconBold } from '@tabler/icons-react'

const ToggleOutline = () => {
  return (
    <Toggle aria-label='Toggle italic' variant='outline'>
      <IconBold size={16} />
    </Toggle>
  )
}

export default ToggleOutline
