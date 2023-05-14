'use client'

import { Separator } from '@tszhong0411/ui'
import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'

import DocsHeader from '@/components/docs-header'
import MDXComponents from '@/components/mdx-components'

type DocPageProps = {
  params: {
    slug: string[]
  }
}

const DocPage = (props: DocPageProps) => {
  const { params } = props
  const slug = params.slug?.join('/') || ''
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    notFound()
  }

  const MDXComponent = useMDXComponent(doc.body.code)

  return (
    <article className='flex w-full min-w-0 justify-center overflow-x-hidden break-words'>
      <main className='w-full min-w-0 max-w-6xl px-6 pt-4 md:px-12'>
        <DocsHeader
          title={doc.title}
          description={doc.description}
          source={doc.source}
          docs={doc.docs}
          api={doc.api}
        />
        <Separator className='mt-4' />
        <div className='prose w-full max-w-none py-12 dark:prose-invert prose-hr:border-accent-2'>
          <MDXComponent
            components={{
              ...MDXComponents,
            }}
          />
        </div>
      </main>
    </article>
  )
}
export default DocPage
