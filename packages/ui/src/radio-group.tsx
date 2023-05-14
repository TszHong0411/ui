import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { IconCircle } from '@tabler/icons-react'
import { cx } from '@tszhong0411/utils'
import { motion } from 'framer-motion'
import React from 'react'

const animation = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <RadioGroupPrimitive.Root ref={ref} className={cx(className)} {...rest} />
  )
})

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>((props, ref) => {
  const { className, ...rest } = props
  const MotionIconCircle = motion(IconCircle)

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cx(
        [
          'peer h-4 w-4 rounded-full border border-accent-4 transition-[border-color] duration-150',
          'hover:border-accent-fg',
          'data-[state=checked]:border-accent-fg',
          'data-[state=checked]:disabled:border-accent-3',
          'disabled:cursor-not-allowed disabled:border-accent-3 [&:disabled_svg]:fill-accent-3 [&:disabled_svg]:text-accent-3',
        ],
        className
      )}
      {...rest}
    >
      <RadioGroupPrimitive.Indicator className='flex items-center justify-center'>
        <MotionIconCircle
          size={10}
          initial={animation.initial}
          animate={animation.animate}
          transition={{
            duration: 0.15,
          }}
          className='fill-accent-fg text-accent-fg'
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})

RadioGroup.displayName = 'RadioGroup'
RadioGroupItem.displayName = 'RadioGroupItem'

export { RadioGroup, RadioGroupItem }
