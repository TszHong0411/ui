import { Toggle } from '@codewithhong/ui'
import { IconBold } from '@tabler/icons-react'

const ToggleDisabled = () => {
  return (
    <Toggle aria-label='Toggle italic' disabled>
      <IconBold size={16} />
    </Toggle>
  )
}

export default ToggleDisabled
