import { IconArrowBarUp } from '@tabler/icons-react'
import { Button } from '@codewithhong/ui'

const ButtonWithIcon = () => {
  return (
    <Button>
      <IconArrowBarUp size={16} className='mr-2' /> Upload
    </Button>
  )
}

export default ButtonWithIcon
