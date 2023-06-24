import { cx } from '@codewithhong/utils'
import { DialogProps } from '@radix-ui/react-dialog'
import { IconSearch } from '@tabler/icons-react'
import { Command as CommandPrimitive } from 'cmdk'
import React from 'react'

import { Dialog, DialogContent } from './dialog'
import { Kbd, KbdProps } from './kbd'

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <CommandPrimitive
      ref={ref}
      className={cx(
        'flex h-full w-full flex-col overflow-hidden rounded-md bg-accent-1',
        className
      )}
      {...rest}
    />
  )
})

type CommandDialogProps = DialogProps

const CommandDialog = (props: CommandDialogProps) => {
  const { children, ...rest } = props

  return (
    <Dialog {...rest}>
      <DialogContent className='overflow-hidden p-0'>
        <Command>{children}</Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div className='flex items-center border-b border-accent-2 px-3'>
      <IconSearch size={20} className='mr-2 opacity-50' />
      <CommandPrimitive.Input
        ref={ref}
        className={cx(
          [
            'flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-accent-5',
            'disabled:cursor-not-allowed disabled:opacity-50',
          ],
          className
        )}
        {...rest}
      />
    </div>
  )
})

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <CommandPrimitive.List
      ref={ref}
      className={cx(
        'max-h-[320px] overflow-y-auto overflow-x-hidden',
        className
      )}
      {...rest}
    />
  )
})

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => {
  return (
    <CommandPrimitive.Empty
      ref={ref}
      className='py-6 text-center text-sm'
      {...props}
    />
  )
})

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <CommandPrimitive.Group
      ref={ref}
      className={cx(
        [
          'overflow-hidden p-1 text-accent-fg',
          '[&_[cmdk-group-heading]]:flex [&_[cmdk-group-heading]]:h-7 [&_[cmdk-group-heading]]:items-center [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-accent-5',
        ],
        className
      )}
      {...rest}
    />
  )
})

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <CommandPrimitive.Separator
      ref={ref}
      className={cx('-mx-1 h-px bg-accent-2', className)}
      {...rest}
    />
  )
})

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <CommandPrimitive.Item
      ref={ref}
      className={cx(
        [
          'flex h-12 cursor-pointer select-none items-center rounded-lg px-4 text-sm text-accent-4 transition-colors duration-150 dark:text-accent-5',
          'aria-selected:bg-hover aria-selected:text-accent-6 dark:aria-selected:text-accent-7',
        ],
        className
      )}
      {...rest}
    />
  )
})

const CommandShortcut = (props: KbdProps) => {
  const { className, ...rest } = props

  return <Kbd className={cx('ml-auto text-sm', className)} {...rest} />
}

Command.displayName = 'Command'
CommandDialog.displayName = 'CommandDialog'
CommandInput.displayName = 'CommandInput'
CommandList.displayName = 'CommandList'
CommandEmpty.displayName = 'CommandEmpty'
CommandGroup.displayName = 'CommandGroup'
CommandSeparator.displayName = 'CommandSeparator'
CommandItem.displayName = 'CommandItem'

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
}
