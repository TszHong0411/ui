import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cx } from '@tszhong0411/utils'
import React from 'react'

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>((props, ref) => {
  const { className, sideOffset = 4, ...rest } = props

  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cx(
        'z-50 rounded-md border border-accent-2 px-3 py-2 text-center text-sm',
        className
      )}
      {...rest}
    />
  )
})

const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <TooltipPrimitive.Arrow
      ref={ref}
      className={cx('fill-accent-2', className)}
      strokeWidth={4}
      {...rest}
    />
  )
})

TooltipContent.displayName = 'TooltipContent'
TooltipArrow.displayName = 'TooltipArrow'

export {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
}
