import { IconAlertCircle } from '@tabler/icons-react'
import { Alert, AlertDescription, AlertTitle } from '@codewithhong/ui'

const AlertInfo = () => {
  return (
    <Alert icon={<IconAlertCircle size={20} />} variant='info'>
      <AlertTitle>Boom!</AlertTitle>
      <AlertDescription>Here is a important message.</AlertDescription>
    </Alert>
  )
}

export default AlertInfo
