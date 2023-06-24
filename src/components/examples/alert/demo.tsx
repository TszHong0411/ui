import { Alert, AlertDescription, AlertTitle } from '@codewithhong/ui'
import { IconAlertCircle } from '@tabler/icons-react'

const AlertDemo = () => {
  return (
    <Alert icon={<IconAlertCircle size={20} />}>
      <AlertTitle>Boom!</AlertTitle>
      <AlertDescription>Here is a important message.</AlertDescription>
    </Alert>
  )
}

export default AlertDemo
