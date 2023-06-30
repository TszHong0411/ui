import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import {
  IconCheck,
  IconChevronRight,
  IconPointFilled,
} from '@tabler/icons-react'
import { cx } from '@tszhong0411/utils'
import React from 'react'

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>((props, ref) => {
  const { className, sideOffset = 5, ...rest } = props

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
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
    </DropdownMenuPrimitive.Portal>
  )
})

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <DropdownMenuPrimitive.Item
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

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cx('px-3 py-1.5 text-sm font-semibold', className)}
      {...rest}
    />
  )
})

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <DropdownMenuPrimitive.CheckboxItem
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
      <DropdownMenuPrimitive.ItemIndicator>
        <IconCheck size={16} className='ml-2' />
      </DropdownMenuPrimitive.ItemIndicator>
    </DropdownMenuPrimitive.CheckboxItem>
  )
})

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <DropdownMenuPrimitive.RadioItem
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
      <DropdownMenuPrimitive.ItemIndicator>
        <IconPointFilled size={16} />
      </DropdownMenuPrimitive.ItemIndicator>
    </DropdownMenuPrimitive.RadioItem>
  )
})

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cx('-mx-1 my-1 h-px bg-accent-2', className)}
      {...rest}
    />
  )
})

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <DropdownMenuPrimitive.SubTrigger
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
    </DropdownMenuPrimitive.SubTrigger>
  )
})

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <DropdownMenuPrimitive.SubContent
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

const DropdownMenuArrow = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Arrow>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <DropdownMenuPrimitive.Arrow
      ref={ref}
      className={cx('fill-accent-2', className)}
      strokeWidth={4}
      {...rest}
    />
  )
})

DropdownMenuContent.displayName = 'DropdownContent'
DropdownMenuItem.displayName = 'DropdownItem'
DropdownMenuLabel.displayName = 'DropdownLabel'
DropdownMenuCheckboxItem.displayName = 'DropdownCheckboxItem'
DropdownMenuRadioItem.displayName = 'DropdownRadioItem'
DropdownMenuSeparator.displayName = 'DropdownSeparator'
DropdownMenuSubTrigger.displayName = 'DropdownSubTDropdownMenuSubTrigger'
DropdownMenuSubContent.displayName = 'DropdownSubTDropdownMenuSubContent'
DropdownMenuArrow.displayName = 'DropdownSubTDropdownMenuArrow'

export {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
}
