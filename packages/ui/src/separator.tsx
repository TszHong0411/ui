import { cx } from '@codewithhong/utils'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import React from 'react'

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>((props, ref) => {
  const {
    className,
    orientation = 'horizontal',
    decorative = true,
    ...rest
  } = props

  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cx(
        'bg-accent-2',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...rest}
    />
  )
})

Separator.displayName = 'Separator'

export { Separator }
