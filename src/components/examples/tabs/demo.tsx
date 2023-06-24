import { Tabs, TabsContent, TabsList, TabsTrigger } from '@codewithhong/ui'

const TabsDemo = () => {
  return (
    <Tabs defaultValue='apple' className='w-3/4'>
      <TabsList>
        <TabsTrigger value='apple'>Apple</TabsTrigger>
        <TabsTrigger value='orange'>Orange</TabsTrigger>
        <TabsTrigger value='mango'>Mango</TabsTrigger>
      </TabsList>
      <TabsContent value='apple' className='p-6'>
        Apple
      </TabsContent>
      <TabsContent value='orange' className='p-6'>
        Orange
      </TabsContent>
      <TabsContent value='mango' className='p-6'>
        Mango
      </TabsContent>
    </Tabs>
  )
}

export default TabsDemo
