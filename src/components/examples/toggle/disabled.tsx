import { IconBold } from '@tabler/icons-react'
import { Toggle } from '@codewithhong/ui'

const ToggleDisabled = () => {
  return (
    <Toggle aria-label='Toggle italic' disabled>
      <IconBold size={16} />
    </Toggle>
  )
}

export default ToggleDisabled
