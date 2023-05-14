import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { cx } from '@tszhong0411/utils'
import React from 'react'

import { buttonVariants } from './button'

const AlertDialog = AlertDialogPrimitive.Root
const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = (
  props: AlertDialogPrimitive.AlertDialogPortalProps
) => {
  const { children, ...rest } = props

  return (
    <AlertDialogPrimitive.Portal {...rest}>
      {children}
    </AlertDialogPrimitive.Portal>
  )
}

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <AlertDialogPrimitive.Overlay
      ref={ref}
      className={cx(
        'fixed inset-0 z-40 bg-black/50 opacity-100 backdrop-blur-sm transition-opacity duration-150',
        className
      )}
      {...rest}
    />
  )
})

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        ref={ref}
        className={cx(
          'fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border border-accent-2 bg-accent-1 px-4 py-6',
          className
        )}
        {...rest}
      />
    </AlertDialogPortal>
  )
})

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <AlertDialogPrimitive.Title
      ref={ref}
      className={cx(
        'text-lg font-semibold leading-none tracking-tight',
        className
      )}
      {...rest}
    />
  )
})

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <AlertDialogPrimitive.Description
      ref={ref}
      className={cx('mb-5 mt-4 text-sm text-accent-5', className)}
      {...rest}
    />
  )
})

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <AlertDialogPrimitive.Action
      ref={ref}
      className={cx(buttonVariants(), className)}
      {...rest}
    />
  )
})

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <AlertDialogPrimitive.Cancel
      ref={ref}
      className={cx(buttonVariants({ variant: 'outline' }), className)}
      {...rest}
    />
  )
})

AlertDialogPortal.displayName = 'AlertDialogPortal'
AlertDialogOverlay.displayName = 'AlertDialogOverlay'
AlertDialogContent.displayName = 'AlertDialogContent'
AlertDialogTitle.displayName = 'AlertDialogTitle'
AlertDialogDescription.displayName = 'AlertDialogDescription'
AlertDialogAction.displayName = 'AlertDialogAction'
AlertDialogCancel.displayName = 'AlertDialogCancel'

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}
