import * as SelectPrimitive from '@radix-ui/react-select'
import { IconCheck, IconChevronDown } from '@tabler/icons-react'
import { cx } from '@tszhong0411/utils'
import React from 'react'

const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cx(
        [
          'flex items-center justify-between rounded-lg border border-accent-2 px-3 py-2 transition-colors duration-150',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'hover:border-accent-fg',
        ],
        className
      )}
      {...rest}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <IconChevronDown size={16} className='opacity-50' />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
})

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>((props, ref) => {
  const { className, children, position = 'popper', ...rest } = props

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cx(
          [
            'z-50 min-w-[12rem] overflow-hidden rounded-md border shadow-md transition-colors',
            'border-accent-2 bg-accent-bg',
            position === 'popper' && 'translate-y-1',
          ],
          className
        )}
        position={position}
        {...rest}
      >
        <SelectPrimitive.Viewport
          className={cx([
            'p-1',
            position === 'popper' &&
              'h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]',
          ])}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
})

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <SelectPrimitive.Label
      ref={ref}
      className={cx('px-3 py-1.5 text-sm font-semibold', className)}
      {...rest}
    />
  )
})

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>((props, ref) => {
  const { className, children, ...rest } = props

  return (
    <SelectPrimitive.Item
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
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <IconCheck size={16} className='ml-2' />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
})

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <SelectPrimitive.Separator
      ref={ref}
      className={cx('-mx-1 my-1 h-px bg-accent-2', className)}
      {...rest}
    />
  )
})

SelectTrigger.displayName = 'SelectTrigger'
SelectContent.displayName = 'SelectContent'
SelectLabel.displayName = 'SelectLabel'
SelectItem.displayName = 'SelectItem'
SelectSeparator.displayName = 'SelectSeparator'

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
