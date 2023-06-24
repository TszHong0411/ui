import { Alert, AlertDescription, AlertTitle } from '@codewithhong/ui'
import { IconAlertCircle } from '@tabler/icons-react'

const AlertDanger = () => {
  return (
    <Alert icon={<IconAlertCircle size={20} />} variant='danger'>
      <AlertTitle>Boom!</AlertTitle>
      <AlertDescription>Here is a important message.</AlertDescription>
    </Alert>
  )
}

export default AlertDanger
