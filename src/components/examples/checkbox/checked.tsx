import { Checkbox, Label } from '@tszhong0411/ui'

const CheckboxChecked = () => {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox id='checkbox-2' defaultChecked />
      <Label htmlFor='checkbox-2'>Checkbox 2</Label>
    </div>
  )
}
export default CheckboxChecked
