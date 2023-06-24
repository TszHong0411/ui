import { Input, Label } from '@codewithhong/ui'

const InputWithLabel = () => {
  return (
    <div className='flex flex-col gap-1.5'>
      <Label htmlFor='search'>Search</Label>
      <Input type='text' id='search' placeholder='Search' />
    </div>
  )
}

export default InputWithLabel
