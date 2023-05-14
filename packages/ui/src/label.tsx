import * as LabelPrimitive from '@radix-ui/react-label'
import { cx } from '@tszhong0411/utils'
import React from 'react'

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cx(
        'cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className
      )}
      {...rest}
    />
  )
})

Label.displayName = 'Label'

export { Label }
