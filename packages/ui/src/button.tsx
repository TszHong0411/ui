import { cva, cx, VariantProps } from '@codewithhong/utils'
import { IconLoader2 } from '@tabler/icons-react'
import React from 'react'

const buttonVariants = cva(
  [
    'transition-colors duration-150 px-4 py-2 rounded-lg border font-medium flex justify-center items-center',
    'disabled:bg-accent-1 disabled:text-accent-3 disabled:border-accent-2 disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-accent-fg bg-accent-fg text-accent-bg',
          'hover:text-accent-fg hover:bg-accent-bg',
        ],
        outline: [
          'border-accent-2 bg-accent-bg text-accent-5',
          'hover:text-accent-fg hover:border-accent-fg',
        ],
        danger: [
          'border-danger bg-danger text-white',
          'hover:text-danger hover:bg-transparent',
        ],
        ghost: [
          'border-transparent bg-transparent text-accent-fg',
          'hover:bg-hover',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

type ButtonProps = {
  loading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { variant, className, children, loading = false, ...rest } = props

    return (
      <button
        className={cx(buttonVariants({ variant, className }))}
        ref={ref}
        type='button'
        {...rest}
      >
        {loading && (
          <IconLoader2 width={16} height={16} className='mr-2 animate-spin' />
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
