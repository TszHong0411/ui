import { Label, Switch } from '@codewithhong/ui'

const SwitchDisabled = () => {
  return (
    <div className='flex items-center gap-2'>
      <Switch id='bluetooth' disabled />
      <Label htmlFor='bluetooth'>Bluetooth</Label>
    </div>
  )
}

export default SwitchDisabled
