import { IconSelector } from '@tabler/icons-react'
import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@tszhong0411/ui'
import React from 'react'

const CollapsibleDemo = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className='w-[350px] space-y-2'
    >
      <div className='flex items-center justify-between space-x-4 px-4'>
        <h4 className='text-sm font-semibold'>
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant='ghost' className='h-9 w-9 p-0'>
            <IconSelector size={16} />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className='rounded-md border border-accent-2 px-4 py-3 font-code text-sm'>
        @radix-ui/primitives
      </div>
      <CollapsibleContent className='space-y-2'>
        <div className='rounded-md border border-accent-2 px-4 py-3 font-code text-sm'>
          @radix-ui/colors
        </div>
        <div className='rounded-md border border-accent-2 px-4 py-3 font-code text-sm'>
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
export default CollapsibleDemo
