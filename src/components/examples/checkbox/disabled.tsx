import { Checkbox, Label } from '@codewithhong/ui'

const CheckboxDisabled = () => {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox id='checkbox-3' disabled />
      <Label htmlFor='checkbox-3'>Checkbox 3</Label>
    </div>
  )
}

export default CheckboxDisabled
