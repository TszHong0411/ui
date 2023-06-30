import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { cx } from '@tszhong0411/utils'
import React from 'react'

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cx('relative overflow-hidden', className)}
      {...rest}
    >
      <ScrollAreaPrimitive.Viewport className='h-full w-full rounded'>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <Scrollbar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
})

const Scrollbar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>((props, ref) => {
  const { className, orientation = 'vertical', ...rest } = props

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cx(
        'flex touch-none select-none',
        orientation === 'vertical' &&
          'h-full w-2.5 border-l border-l-transparent p-px',
        orientation === 'horizontal' &&
          'h-2.5 border-t border-t-transparent p-px',
        className
      )}
      {...rest}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={cx(
          'relative rounded-full bg-accent-5',
          orientation === 'vertical' && 'flex-1'
        )}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
})

ScrollArea.displayName = 'ScrollArea'
Scrollbar.displayName = 'ScrollArea'

export { ScrollArea, Scrollbar }
