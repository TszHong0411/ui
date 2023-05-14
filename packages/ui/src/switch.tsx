import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cx } from '@tszhong0411/utils'
import React from 'react'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <SwitchPrimitive.Root
      ref={ref}
      className={cx(
        [
          'peer inline-flex h-6 w-11 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-150',
          'data-[state=checked]:bg-accent-fg data-[state=unchecked]:bg-accent-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
        ],
        className
      )}
      {...rest}
    >
      <SwitchPrimitive.Thumb
        className={cx([
          'pointer-events-none block h-5 w-5 rounded-full bg-accent-bg transition-transform duration-150',
          'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
        ])}
      />
    </SwitchPrimitive.Root>
  )
})

Switch.displayName = 'Switch'

export { Switch }
