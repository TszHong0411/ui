import { cx } from '@codewithhong/utils'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import React from 'react'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cx(
        'flex gap-6 overflow-x-auto px-3 pb-px shadow-[0_-1px_0_var(--accent-2)_inset]',
        className
      )}
      {...rest}
    />
  )
})

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cx(
        '-mb-px border-b-2 border-transparent py-1.5 text-sm font-semibold',
        'data-[state=active]:border-accent-fg',
        className
      )}
      {...rest}
    />
  )
})

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>((props, ref) => {
  const { className, ...rest } = props

  return <TabsPrimitive.Content ref={ref} className={cx(className)} {...rest} />
})

TabsList.displayName = 'TabsList'
TabsTrigger.displayName = 'TabsTrigger'
TabsContent.displayName = 'TabsContent'

export { Tabs, TabsContent, TabsList, TabsTrigger }
