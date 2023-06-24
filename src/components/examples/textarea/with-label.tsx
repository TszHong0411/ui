import { Label, Textarea } from '@codewithhong/ui'

const TextareaWithLabel = () => {
  return (
    <div className='flex w-full flex-col gap-1.5'>
      <Label htmlFor='message'>Your message</Label>
      <Textarea placeholder='Type your message here.' id='message' />
    </div>
  )
}

export default TextareaWithLabel
