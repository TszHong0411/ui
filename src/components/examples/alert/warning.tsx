import { Alert, AlertDescription, AlertTitle } from '@codewithhong/ui'
import { IconAlertCircle } from '@tabler/icons-react'

const AlertWarning = () => {
  return (
    <Alert icon={<IconAlertCircle size={20} />} variant='warning'>
      <AlertTitle>Boom!</AlertTitle>
      <AlertDescription>Here is a important message.</AlertDescription>
    </Alert>
  )
}

export default AlertWarning
