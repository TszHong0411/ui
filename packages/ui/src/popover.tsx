import { cx } from '@codewithhong/utils'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import React from 'react'

const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cx(
        [
          'z-50 min-w-[12rem] overflow-hidden rounded-md border p-4 shadow-md transition-colors',
          'border-accent-2 bg-accent-bg',
        ],
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))

const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <PopoverPrimitive.Arrow
      ref={ref}
      className={cx('fill-accent-2', className)}
      strokeWidth={4}
      {...rest}
    />
  )
})

PopoverContent.displayName = 'PopoverContent'
PopoverArrow.displayName = 'PopoverArrow'

export { Popover, PopoverContent, PopoverTrigger }
