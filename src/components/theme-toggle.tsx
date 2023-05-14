'use client'

import { Button, IconMoon, IconSun } from '@tszhong0411/ui'
import { useTheme } from '@tszhong0411/ui'
import React from 'react'

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Button
      variant='ghost'
      className='flex h-9 w-9 items-center justify-center p-0'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' && <IconSun />}
      {resolvedTheme === 'light' && <IconMoon />}
    </Button>
  )
}
export default ThemeToggle
