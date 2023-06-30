import { Label, RadioGroup, RadioGroupItem } from '@tszhong0411/ui'

const RadioGroupDisabled = () => {
  return (
    <RadioGroup defaultValue='option-1' className='flex flex-col gap-2.5'>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='option-1' id='option-1' />
        <Label htmlFor='option-1'>Option 1</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='option-2' id='option-2' disabled />
        <Label htmlFor='option-2'>Option 2</Label>
      </div>
    </RadioGroup>
  )
}

export default RadioGroupDisabled
