import { cva, cx, VariantProps } from '@tszhong0411/utils'
import React from 'react'

const alertVariants = cva(
  ['rounded-lg border p-4 flex justify-start gap-4 w-full'],
  {
    variants: {
      variant: {
        default: 'border-accent-2',
        danger:
          'border-red-200 bg-red-100 text-red-900 dark:border-red-200/30 dark:bg-red-900/30 dark:text-red-200',
        info: 'border-blue-200 bg-blue-100 text-blue-900 dark:border-blue-200/30 dark:bg-blue-900/30 dark:text-blue-200',
        warning:
          'border-yellow-100 bg-yellow-50 text-yellow-900 dark:border-yellow-200/30 dark:bg-yellow-700/30 dark:text-yellow-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

type AlertProps = {
  icon?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants>

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { variant, className, icon, children, ...rest } = props

  return (
    <div
      ref={ref}
      className={cx(alertVariants({ variant, className }))}
      {...rest}
    >
      <div className='flex h-5 w-5 items-center justify-center'>{icon}</div>
      <div className='flex-1 space-y-1.5'>{children}</div>
    </div>
  )
})

const AlertTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div
      ref={ref}
      className={cx('flex h-5 items-center font-semibold', className)}
      {...rest}
    />
  )
})

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props

  return <div ref={ref} className={cx('text-sm', className)} {...rest} />
})

Alert.displayName = 'Alert'
AlertTitle.displayName = 'AlertTitle'
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertDescription, AlertTitle }
