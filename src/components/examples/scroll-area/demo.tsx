import { ScrollArea, Separator } from '@codewithhong/ui'
import React from 'react'

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

const ScrollAreaDemo = () => {
  return (
    <ScrollArea className='h-[350px] w-[200px] rounded-md border border-accent-2 p-4 pt-2'>
      {TAGS.map((tag) => (
        <React.Fragment key={tag}>
          <div className='my-2 text-sm'>{tag}</div>
          <Separator className='h-px' />
        </React.Fragment>
      ))}
    </ScrollArea>
  )
}

export default ScrollAreaDemo
