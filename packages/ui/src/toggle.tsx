import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, cx, VariantProps } from '@tszhong0411/utils'
import React from 'react'

const toggleVariants = cva(
  [
    'inline-flex items-center justify-center rounded-md transition-colors duration-150 h-10 px-3',
    'hover:bg-hover',
    'data-[state=on]:bg-accent-2',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent',
  ],
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'bg-transparent border border-accent-2 hover:bg-hover',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

type ToggleProps = React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>((props, ref) => {
  const { className, variant, ...rest } = props

  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cx(toggleVariants({ variant, className }))}
      {...rest}
    />
  )
})

Toggle.displayName = 'Toggle'

export { Toggle }
