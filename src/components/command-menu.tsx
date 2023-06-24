'use client'

import {
  Button,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  Kbd,
} from '@codewithhong/ui'
import { IconCircle, IconFile, IconMoon, IconSun } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import React from 'react'

import { docs } from '@/config/docs'

const CommandMenu = () => {
  const [open, setOpen] = React.useState(false)
  const { setTheme } = useTheme()
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant='outline'
        className='flex h-9 w-40 justify-between'
        onClick={() => setOpen(true)}
      >
        Search
        <Kbd className='text-sm' meta>
          K
        </Kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Links'>
            {docs.mainNav.map((navItem) => (
              <CommandItem
                key={navItem.href}
                onSelect={() => {
                  runCommand(() => router.push(navItem.href))
                }}
              >
                <IconFile size={16} className='mr-2' />
                {navItem.title}
              </CommandItem>
            ))}
          </CommandGroup>
          {docs.sidebarNav.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((navItem) => (
                <CommandItem
                  key={navItem.href}
                  onSelect={() => {
                    runCommand(() =>
                      navItem.href.startsWith('https')
                        ? window.open(navItem.href, '_blank')
                        : router.push(navItem.href)
                    )
                  }}
                >
                  <IconCircle size={16} className='mr-2' />
                  {navItem.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          <CommandSeparator />
          <CommandGroup heading='Theme'>
            <CommandItem onSelect={() => runCommand(() => setTheme('light'))}>
              <IconSun size={16} className='mr-2' />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme('dark'))}>
              <IconMoon size={16} className='mr-2' />
              Dark
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default CommandMenu
