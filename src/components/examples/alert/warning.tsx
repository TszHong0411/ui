import { IconAlertCircle } from '@tabler/icons-react'
import { Alert, AlertDescription, AlertTitle } from '@tszhong0411/ui'

const AlertWarning = () => {
  return (
    <Alert icon={<IconAlertCircle size={20} />} variant='warning'>
      <AlertTitle>Boom!</AlertTitle>
      <AlertDescription>Here is a important message.</AlertDescription>
    </Alert>
  )
}

export default AlertWarning
