import { Checkbox, Label } from '@codewithhong/ui'

const CheckboxDemo = () => {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox id='checkbox-1' />
      <Label htmlFor='checkbox-1'>Checkbox 1</Label>
    </div>
  )
}

export default CheckboxDemo
