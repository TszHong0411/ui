import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

type Site = {
  url: string
  title: string
  name: string
  keywords: string[]
  titleTemplate: string
  description: string
  favicons: IconDescriptor[]
}

export const site: Site = {
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://ui.honghong.me'
      : 'http://localhost:3000',
  title: 'UI',
  name: 'codewithhong',
  keywords: ['codewithhong', 'codewithhong/ui', 'ui', 'react'],
  titleTemplate: '- UI',
  description: 'The documentation site for codewithhong/ui.',
  favicons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/static/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/static/favicon/favicon-32x32.png',
    },
  ],
}
