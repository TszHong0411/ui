import { cx } from '@tszhong0411/utils'
import React from 'react'

type KbdProps = {
  meta?: boolean
  shift?: boolean
  alt?: boolean
  ctrl?: boolean
} & React.HTMLAttributes<HTMLElement>

type OS = 'macos' | 'ios' | 'windows' | 'android' | 'linux'

const Kbd = (props: KbdProps) => {
  const [os, setOs] = React.useState<OS>()
  const [mounted, setMounted] = React.useState(false)
  const { children, className, meta, shift, alt, ctrl, ...rest } = props

  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => {
    const { userAgent } = window.navigator
    const macosPlatforms = /(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i
    const windowsPlatforms = /(Win32)|(Win64)|(Windows)|(WinCE)/i
    const iosPlatforms = /(iPhone)|(iPad)|(iPod)/i

    if (macosPlatforms.test(userAgent)) {
      setOs('macos')
    }
    if (iosPlatforms.test(userAgent)) {
      setOs('ios')
    }
    if (windowsPlatforms.test(userAgent)) {
      setOs('windows')
    }
    if (/Android/i.test(userAgent)) {
      setOs('android')
    }
    if (/Linux/i.test(userAgent)) {
      setOs('linux')
    }
  }, [])

  return (
    <kbd
      className={cx(
        'inline-block min-w-[24px] space-x-2 rounded-md border border-accent-2 bg-accent-1 px-2 text-center text-sm leading-[2em] text-accent-5',
        className
      )}
      {...rest}
    >
      {mounted && meta && (
        <span>{os === 'macos' || os === 'ios' ? '⌘' : '^'}</span>
      )}
      {shift && <span>⇧</span>}
      {alt && <span>⌥</span>}
      {ctrl && <span>⌃</span>}
      {children && <span>{children}</span>}
    </kbd>
  )
}

export { Kbd, type KbdProps }
