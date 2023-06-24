import { IconCalendar } from '@tabler/icons-react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@codewithhong/ui'

const HoverCardDemo = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href='https://nextjs.org' rel='noopener noreferrer'>
          @nextjs
        </a>
      </HoverCardTrigger>
      <HoverCardContent className='w-80'>
        <div className='flex justify-between space-x-4'>
          <Avatar>
            <AvatarImage src='https://github.com/vercel.png' />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>@nextjs</h4>
            <p className='text-sm'>
              The React Framework – created and maintained by @vercel.
            </p>
            <div className='flex items-center pt-2'>
              <IconCalendar size={16} className='mr-2 opacity-70' />{' '}
              <span className='text-muted-foreground text-xs'>
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default HoverCardDemo
