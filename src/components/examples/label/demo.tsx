import { Checkbox, Input, Label } from '@codewithhong/ui'

const LabelDemo = () => {
  return (
    <div className='space-y-6'>
      <div className='flex items-center gap-2'>
        <Checkbox id='checkbox-1' defaultChecked />
        <Label htmlFor='checkbox-1'>Checkbox 1</Label>
      </div>
      <div className='flex flex-col gap-1.5'>
        <Label htmlFor='search'>Search</Label>
        <Input type='text' id='search' placeholder='Search' />
      </div>
    </div>
  )
}

export default LabelDemo
