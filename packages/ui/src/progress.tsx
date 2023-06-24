import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cx } from '@codewithhong/utils'
import React from 'react'

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>((props, ref) => {
  const { className, value, ...rest } = props

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cx(
        'relative h-[10px] w-full overflow-hidden rounded-md bg-accent-2',
        className
      )}
      {...rest}
    >
      <ProgressPrimitive.Indicator
        className='h-full w-full flex-1 bg-accent-fg transition-all'
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})

Progress.displayName = 'Progress'

export { Progress }
