import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import {
  IconCheck,
  IconChevronRight,
  IconPointFilled,
} from '@tabler/icons-react'
import { cx } from '@tszhong0411/utils'
import React from 'react'

const ContextMenu = ContextMenuPrimitive.Root
const ContextMenuTrigger = ContextMenuPrimitive.Trigger
const ContextMenuGroup = ContextMenuPrimitive.Group
const ContextMenuPortal = ContextMenuPrimitive.Portal
const ContextMenuSub = ContextMenuPrimitive.Sub
const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
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
    </ContextMenuPrimitive.Portal>
  )
})

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <ContextMenuPrimitive.Item
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

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <ContextMenuPrimitive.Label
      ref={ref}
      className={cx('px-3 py-1.5 text-sm font-semibold', className)}
      {...rest}
    />
  )
})

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <ContextMenuPrimitive.CheckboxItem
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
      <ContextMenuPrimitive.ItemIndicator>
        <IconCheck size={16} className='ml-2' />
      </ContextMenuPrimitive.ItemIndicator>
    </ContextMenuPrimitive.CheckboxItem>
  )
})

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <ContextMenuPrimitive.RadioItem
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
      <ContextMenuPrimitive.ItemIndicator>
        <IconPointFilled size={16} />
      </ContextMenuPrimitive.ItemIndicator>
    </ContextMenuPrimitive.RadioItem>
  )
})

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <ContextMenuPrimitive.Separator
      ref={ref}
      className={cx('-mx-1 my-1 h-px bg-accent-2', className)}
      {...rest}
    />
  )
})

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <ContextMenuPrimitive.SubTrigger
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
    </ContextMenuPrimitive.SubTrigger>
  )
})

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <ContextMenuPrimitive.SubContent
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

const ContextMenuArrow = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Arrow>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <ContextMenuPrimitive.Arrow
      ref={ref}
      className={cx('fill-accent-2', className)}
      strokeWidth={4}
      {...rest}
    />
  )
})

ContextMenuContent.displayName = 'ContextMenuContent'
ContextMenuItem.displayName = 'ContextMenuItem'
ContextMenuLabel.displayName = 'ContextMenuLabel'
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem'
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem'
ContextMenuSeparator.displayName = 'ContextMenuSeparator'
ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger'
ContextMenuSubContent.displayName = 'ContextMenuSubContent'
ContextMenuArrow.displayName = 'ContextMenuArrow'

export {
  ContextMenu,
  ContextMenuArrow,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
}
