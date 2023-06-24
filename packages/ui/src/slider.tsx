import { cx } from '@codewithhong/utils'
import * as SliderPrimitive from '@radix-ui/react-slider'
import React from 'react'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cx(
        'relative flex h-4 touch-none select-none items-center',
        className
      )}
      {...rest}
    >
      <SliderPrimitive.Track className='relative h-[5px] grow rounded-full bg-accent-3'>
        <SliderPrimitive.Range className='absolute h-full rounded-full bg-accent-fg' />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className='block h-4 w-4 rounded-full bg-accent-fg' />
    </SliderPrimitive.Root>
  )
})

Slider.displayName = 'Slider'

export { Slider }
