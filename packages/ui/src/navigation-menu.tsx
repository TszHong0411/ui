import { cva, cx } from '@codewithhong/utils'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { IconChevronDown } from '@tabler/icons-react'
import React from 'react'

const NavigationMenuItem = NavigationMenuPrimitive.Item
const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cx(
        'relative z-10 flex flex-1 items-center justify-center',
        className
      )}
      {...rest}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  )
})

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <NavigationMenuPrimitive.List
      ref={ref}
      className={cx(
        'group flex flex-1 list-none items-center justify-center gap-1',
        className
      )}
      {...rest}
    />
  )
})

const navigationMenuTriggerStyle = cva([
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-accent-bg h-10 py-2 px-4 group w-max',
  'hover:bg-hover',
  'disabled:opacity-50 disabled:cursor-not-allowed',
])

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cx(navigationMenuTriggerStyle(), 'group', className)}
      {...rest}
    >
      {children}
      <IconChevronDown
        className='relative top-px ml-1 h-3 w-3 transition duration-150 group-data-[state=open]:rotate-180'
        aria-hidden='true'
      />
    </NavigationMenuPrimitive.Trigger>
  )
})

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cx('left-0 top-0 w-full md:absolute md:w-auto', className)}
      {...rest}
    />
  )
})

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div className={cx('absolute left-0 top-full flex justify-center')}>
      <NavigationMenuPrimitive.Viewport
        className={cx(
          'relative mt-1.5 h-[--radix-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border border-accent-2 bg-accent-bg shadow-lg md:w-[--radix-navigation-menu-viewport-width]',
          className
        )}
        ref={ref}
        {...rest}
      />
    </div>
  )
})

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <NavigationMenuPrimitive.Indicator
      ref={ref}
      className={cx(
        'top-full z-10 flex h-1.5 items-end justify-center overflow-hidden',
        className
      )}
      {...rest}
    >
      <div className='relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-accent-2 shadow-md' />
    </NavigationMenuPrimitive.Indicator>
  )
})

NavigationMenu.displayName = 'NavigationMenu'
NavigationMenuList.displayName = 'NavigationMenuList'
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger'
NavigationMenuContent.displayName = 'NavigationMenuContent'
NavigationMenuViewport.displayName = 'NavigationMenuViewport'
NavigationMenuIndicator.displayName = 'NavigationMenuIndicator'

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
}
