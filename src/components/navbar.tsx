'use client'

import { cx } from '@codewithhong/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { docs } from '@/config/docs'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className={cx('hidden space-x-4 md:block')}>
      {docs.mainNav.map((navItem) => (
        <Link
          key={navItem.title}
          href={navItem.href}
          className={cx(
            'hover:text-accent-fg',
            pathname.includes(navItem.href) && 'text-accent-fg',
            !pathname.includes(navItem.href) && 'text-accent-5'
          )}
        >
          {navItem.title}
        </Link>
      ))}
    </div>
  )
}

export default Navbar
