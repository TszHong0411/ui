import { cx } from '@codewithhong/utils'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import React from 'react'

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cx(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        className
      )}
      {...rest}
    />
  )
})

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={cx('aspect-square h-full w-full', className)}
      {...rest}
    />
  )
})

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cx(
        'flex h-full w-full items-center justify-center rounded-full bg-accent-2',
        className
      )}
      {...rest}
    />
  )
})

Avatar.displayName = AvatarPrimitive.Root.displayName
AvatarImage.displayName = AvatarPrimitive.Image.displayName
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarFallback, AvatarImage }
