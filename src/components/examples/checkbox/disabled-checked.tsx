import { Checkbox, Label } from '@tszhong0411/ui'

const CheckboxDisabledChecked = () => {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox id='checkbox-4' disabled checked />
      <Label htmlFor='checkbox-4'>Checkbox 4</Label>
    </div>
  )
}

export default CheckboxDisabledChecked
