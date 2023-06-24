import { Label, Switch } from '@codewithhong/ui'

const SwitchDemo = () => {
  return (
    <div className='flex items-center gap-2'>
      <Switch id='airplane-mode' />
      <Label htmlFor='airplane-mode'>Airplane Mode</Label>
    </div>
  )
}

export default SwitchDemo
