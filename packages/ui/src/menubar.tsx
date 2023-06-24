import * as MenubarPrimitive from '@radix-ui/react-menubar'
import {
  IconCheck,
  IconChevronRight,
  IconPointFilled,
} from '@tabler/icons-react'
import { cx } from '@codewithhong/utils'
import React from 'react'

const MenubarMenu = MenubarPrimitive.Menu
const MenubarGroup = MenubarPrimitive.Group
const MenubarPortal = MenubarPrimitive.Portal
const MenubarSub = MenubarPrimitive.Sub
const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <MenubarPrimitive.Root
      ref={ref}
      className={cx(
        'flex h-10 items-center gap-1 rounded-md border border-accent-2 bg-accent-bg p-1',
        className
      )}
      {...rest}
    />
  )
})

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <MenubarPrimitive.Trigger
      ref={ref}
      className={cx(
        'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-hover data-[state=open]:text-accent-fg',
        className
      )}
      {...rest}
    />
  )
})

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>((props, ref) => {
  const {
    className,
    align = 'start',
    alignOffset = -4,
    sideOffset = 8,
    ...rest
  } = props

  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cx(
          [
            'z-50 min-w-[12rem] overflow-hidden rounded-md border p-1 shadow-md transition-colors',
            'border-accent-2 bg-accent-bg',
          ],
          className
        )}
        {...rest}
      />
    </MenubarPrimitive.Portal>
  )
})

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <MenubarPrimitive.Item
      ref={ref}
      className={cx(
        [
          'flex w-full select-none items-center rounded-md px-3 py-1.5 text-sm outline-none duration-150',
          'text-accent-7 data-[highlighted]:bg-accent-2 data-[highlighted]:text-accent-fg',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        ],
        className
      )}
      {...rest}
    />
  )
})

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <MenubarPrimitive.Label
      ref={ref}
      className={cx('px-3 py-1.5 text-sm font-semibold', className)}
      {...rest}
    />
  )
})

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      className={cx(
        [
          'flex w-full select-none items-center justify-between rounded-md px-3 py-1.5 text-sm outline-none duration-150',
          'text-accent-7 data-[highlighted]:bg-accent-2 data-[highlighted]:text-accent-fg',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        ],
        className
      )}
      {...rest}
    >
      <div>{children}</div>
      <MenubarPrimitive.ItemIndicator>
        <IconCheck size={16} className='ml-2' />
      </MenubarPrimitive.ItemIndicator>
    </MenubarPrimitive.CheckboxItem>
  )
})

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <MenubarPrimitive.RadioItem
      ref={ref}
      className={cx(
        [
          'flex w-full select-none items-center justify-between rounded-md px-3 py-1.5 text-sm outline-none duration-150',
          'text-accent-7 data-[highlighted]:bg-accent-2 data-[highlighted]:text-accent-fg',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        ],
        className
      )}
      {...rest}
    >
      <div>{children}</div>
      <MenubarPrimitive.ItemIndicator>
        <IconPointFilled size={16} />
      </MenubarPrimitive.ItemIndicator>
    </MenubarPrimitive.RadioItem>
  )
})

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <MenubarPrimitive.Separator
      ref={ref}
      className={cx('-mx-1 my-1 h-px bg-accent-2', className)}
      {...rest}
    />
  )
})

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <MenubarPrimitive.SubTrigger
      ref={ref}
      className={cx(
        [
          'flex w-full select-none items-center rounded-md px-3 py-1.5 text-sm outline-none duration-150',
          'text-accent-7 data-[highlighted]:bg-accent-2 data-[highlighted]:text-accent-fg',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          'data-[state=open]:bg-accent-2',
        ],
        className
      )}
      {...rest}
    >
      {children}
      <IconChevronRight size={16} className='ml-auto' />
    </MenubarPrimitive.SubTrigger>
  )
})

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <MenubarPrimitive.SubContent
      ref={ref}
      className={cx(
        [
          'z-50 min-w-[12rem] overflow-hidden rounded-md border p-1 shadow-md transition-colors',
          'border-accent-2 bg-accent-bg',
        ],
        className
      )}
      {...rest}
    />
  )
})

const MenubarArrow = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Arrow>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <MenubarPrimitive.Arrow
      ref={ref}
      className={cx('fill-accent-2', className)}
      strokeWidth={4}
      {...rest}
    />
  )
})

Menubar.displayName = 'Menubar'
MenubarTrigger.displayName = 'MenubarTrigger'
MenubarContent.displayName = 'MenubarContent'
MenubarItem.displayName = 'MenubarItem'
MenubarLabel.displayName = 'MenubarLabel'
MenubarCheckboxItem.displayName = 'MenubarCheckboxItem'
MenubarRadioItem.displayName = 'MenubarRadioItem'
MenubarSeparator.displayName = 'MenubarSeparator'
MenubarSubTrigger.displayName = 'MenubarSubTrigger'
MenubarSubContent.displayName = 'MenubarSubContent'
MenubarArrow.displayName = 'MenubarArrow'

export {
  Menubar,
  MenubarArrow,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
}
