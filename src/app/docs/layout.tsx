import React from 'react'

import Sidebar from '@/components/sidebar'

type DocsLayoutProps = {
  children: React.ReactNode
}

const DocsLayout = (props: DocsLayoutProps) => {
  const { children } = props

  return (
    <div className='mx-auto flex min-h-[calc(100vh-8rem-1px)] max-w-7xl'>
      <Sidebar />
      {children}
    </div>
  )
}
export default DocsLayout
