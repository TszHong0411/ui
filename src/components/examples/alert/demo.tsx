import { IconAlertCircle } from '@tabler/icons-react'
import { Alert, AlertDescription, AlertTitle } from '@tszhong0411/ui'

const AlertDemo = () => {
  return (
    <Alert icon={<IconAlertCircle size={20} />}>
      <AlertTitle>Boom!</AlertTitle>
      <AlertDescription>Here is a important message.</AlertDescription>
    </Alert>
  )
}

export default AlertDemo
