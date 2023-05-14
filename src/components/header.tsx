'use client'

import { Button, IconBrandGithub, IconMenu, Logo } from '@tszhong0411/ui'
import Link from 'next/link'
import React from 'react'
import { useLockBodyScroll, useToggle } from 'react-use'

import { useSidebar } from '@/hooks/use-sidebar'

import CommandMenu from './command-menu'
import Navbar from './navbar'
import ThemeToggle from './theme-toggle'

const Header = () => {
  const { open, setOpen } = useSidebar()
  const [locked, toggleLocked] = useToggle(false)

  useLockBodyScroll(locked)

  return (
    <header className='sticky top-0 z-40 border-b border-accent-2 bg-accent-bg'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-2 py-4 md:px-6'>
        <div className='flex items-center gap-2 md:gap-6'>
          <Button
            variant='ghost'
            className='flex h-9 w-9 items-center justify-center p-0 md:hidden'
            onClick={() => {
              toggleLocked()
              setOpen(!open)
            }}
          >
            <IconMenu />
          </Button>
          <Link href='/docs' className='flex items-center gap-2.5'>
            <Logo width={22} height={22} />
            <div className='hidden font-bold sm:block'>tszhong0411/ui</div>
          </Link>
          <Navbar />
        </div>
        <div className='flex items-center justify-center gap-2'>
          <CommandMenu />
          <Button
            variant='ghost'
            className='flex h-9 w-9 items-center justify-center p-0'
          >
            <a
              href='https://github.com/tszhong0411/ui'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconBrandGithub />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
export default Header
