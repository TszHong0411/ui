import { Button } from '@codewithhong/ui'
import { IconArrowBarUp } from '@tabler/icons-react'

const ButtonWithIcon = () => {
  return (
    <Button>
      <IconArrowBarUp size={16} className='mr-2' /> Upload
    </Button>
  )
}

export default ButtonWithIcon
