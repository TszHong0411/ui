'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@codewithhong/ui'
import React from 'react'

type ComponentExampleProps = {
  children: React.ReactNode
  component: React.ReactNode
}

const ComponentExample = (props: ComponentExampleProps) => {
  const { children, component } = props

  return (
    <Tabs defaultValue='preview'>
      <TabsList>
        <TabsTrigger value='preview'>Preview</TabsTrigger>
        <TabsTrigger value='code'>Code</TabsTrigger>
      </TabsList>
      <TabsContent value='preview'>
        <div className='not-prose flex items-center justify-center px-4 py-14'>
          {component}
        </div>
      </TabsContent>
      <TabsContent value='code'>{children}</TabsContent>
    </Tabs>
  )
}
export default ComponentExample
