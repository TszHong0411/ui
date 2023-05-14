import NextLink from 'next/link'
import React from 'react'

const Link = (props: React.ComponentPropsWithoutRef<'a'>) => {
  const { children, href, ...rest } = props

  const external = (href as string).startsWith('http')

  if (external) {
    return (
      <a href={href} rel='noopener noreferrer' target='_blank' {...rest}>
        {children}
      </a>
    )
  }

  return <NextLink href={href as string} {...rest} />
}

export default Link
