import { cx } from '@codewithhong/utils'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { IconCheck } from '@tabler/icons-react'
import React from 'react'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cx(
        [
          'peer h-4 w-4 rounded border border-accent-4 transition-[border-color] duration-150',
          'hover:border-accent-fg',
          'data-[state=checked]:border-accent-fg data-[state=checked]:bg-accent-fg',
          'data-[state=checked]:disabled:border-accent-3 data-[state=checked]:disabled:bg-accent-3',
          'disabled:cursor-not-allowed disabled:border-accent-3 disabled:bg-accent-1',
        ],
        className
      )}
      {...rest}
    >
      <CheckboxPrimitive.Indicator className='flex items-center justify-center'>
        <IconCheck className='text-accent-bg' size={14} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})

Checkbox.displayName = 'Checkbox'

export { Checkbox }
