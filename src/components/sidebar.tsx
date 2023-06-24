'use client'

import { IconExternalLink } from '@tabler/icons-react'
import { ScrollArea } from '@codewithhong/ui'
import { cx } from '@codewithhong/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { RemoveScroll } from 'react-remove-scroll'

import { useSidebar } from '@/hooks/use-sidebar'

import { docs } from '@/config/docs'

const Sidebar = () => {
  const pathname = usePathname()
  const { open, setOpen } = useSidebar()

  return (
    <RemoveScroll enabled={open}>
      <aside
        className={cx(
          'fixed z-40 flex h-[calc(100vh-69px)] w-full flex-col bg-accent-bg md:sticky md:top-20 md:h-[calc(100vh-8rem)] md:w-64 md:shrink-0 md:self-start',
          open ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'
        )}
      >
        <ScrollArea>
          <div className='grow overflow-y-auto overflow-x-hidden p-4'>
            {docs.sidebarNav.map((navItem) => (
              <React.Fragment key={navItem.title}>
                <h2 className='mt-8 px-4 py-3 font-medium first:mt-0 first:pt-0'>
                  {navItem.title}
                </h2>

                {navItem.items.map((item) => {
                  const isExternal = item.href.startsWith('https')

                  return (
                    <Link
                      href={item.href}
                      key={item.title}
                      className={cx(
                        'my-1.5 flex rounded-md px-4 py-2 text-sm',
                        pathname === item.href && 'bg-hover text-accent-fg',
                        pathname !== item.href &&
                          'text-accent-5 hover:bg-accent-1',
                        isExternal && 'flex items-center justify-between'
                      )}
                      onClick={() => open && setOpen(false)}
                      {...(isExternal && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    >
                      {item.title}
                      {isExternal && <IconExternalLink size={16} />}
                    </Link>
                  )
                })}
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </aside>
    </RemoveScroll>
  )
}
export default Sidebar
