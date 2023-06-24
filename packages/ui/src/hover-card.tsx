import { cx } from '@codewithhong/utils'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import React from 'react'

const HoverCard = HoverCardPrimitive.Root
const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>((props, ref) => {
  const { className, align = 'center', sideOffset = 4, ...rest } = props

  return (
    <HoverCardPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cx(
        'z-50 w-64 rounded-md border border-accent-2 bg-accent-bg p-4',
        className
      )}
      {...rest}
    />
  )
})

HoverCardContent.displayName = 'HoverCardContent'

export { HoverCard, HoverCardContent, HoverCardTrigger }
