import { cx } from '@tszhong0411/utils'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { Element, Root } from 'hast'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { visit } from 'unist-util-visit'

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: 'docs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    source: {
      type: 'string',
    },
    docs: {
      type: 'string',
    },
    api: {
      type: 'string',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
  },
}))

export default makeSource({
  contentDirPath: 'src/contents',
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            light: 'github-light',
            dark: 'github-dark',
          },
          onVisitLine(node: Element) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node: Element) {
            if (node.properties) {
              node.properties.className =
                '!border-l-[#ff7b81] dark:!border-l-[#ad0008] bg-[#ffd8d8] dark:bg-[#401113] before:!text-accent-6'
            }
          },
          onVisitHighlightedWord(node: Element) {
            if (node.properties) {
              node.properties.className =
                'bg-[#ffd8d8] dark:bg-[#401113] p-1 rounded-md'
            }
          },
        },
      ],
      () => (tree: Root) => {
        visit(tree, 'element', (node, index, parent) => {
          if (
            typeof node.properties?.['data-rehype-pretty-code-fragment'] ===
            'undefined'
          )
            return
          if (typeof parent?.children === 'undefined') return
          if (typeof index !== 'number') return

          Object.assign(node.properties, {
            className: cx(node.properties?.className, 'relative'),
          })
        })
      },
      () => (tree: Root) => {
        visit(tree, 'element', (node, _, parent) => {
          if (node.tagName !== 'pre' && node.tagName !== 'code') return
          if (
            node.tagName === 'code' &&
            parent !== null &&
            parent.type === 'element' &&
            parent.tagName === 'pre'
          )
            return
          if (!node.properties) return

          const theme = node.properties['data-theme']

          if (typeof theme === 'undefined') return

          Object.assign(node.properties, {
            className: cx(
              node.properties?.className,
              theme === 'light'
                ? 'dark:hidden'
                : [
                    'hidden',
                    node.tagName === 'pre' ? 'dark:block' : 'dark:inline',
                  ]
            ),
          })
        })

        visit(tree, 'element', (node) => {
          if (node.tagName !== 'div') return
          if (!node.properties) return

          const theme = node.properties['data-theme']

          if (typeof theme === 'undefined') return

          if ('data-rehype-pretty-code-title' in node.properties) {
            Object.assign(node.properties, {
              className: cx(
                node.properties?.className,
                theme === 'light' ? 'dark:hidden' : ['hidden dark:block']
              ),
            })
          }
        })
      },
    ],
  },
})
