import { Element, Root } from 'hast'
import rehypePrettyCodePlugin, { Options } from 'rehype-pretty-code'

import { cx } from './class'

const addClassName = (node: Element, className: string) => {
  if (node.properties) {
    if (typeof node.properties.className === 'string') {
      node.properties.className += ` ${className}`
      return
    }
    if (Array.isArray(node.properties.className)) {
      return node.properties.className.push(className)
    }
    node.properties.className = [className]
  }

  return
}

type RehypePrettyCode = [typeof rehypePrettyCodePlugin, Partial<Options>]

const rehypeRemoveFragmentDivs = () => {
  return async (tree: Root) => {
    const { visit } = await import('unist-util-visit')

    visit(tree, 'element', (node, index, parent) => {
      if (
        typeof node.properties?.['data-rehype-pretty-code-fragment'] ===
        'undefined'
      )
        return
      if (typeof parent?.children === 'undefined') return
      if (typeof index !== 'number') return

      parent?.children.splice(index, 1, ...node.children)
    })
  }
}

const rehypeHideCodeBlocks = () => {
  return async (tree: Root) => {
    const { visit } = await import('unist-util-visit')

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
            : ['hidden', node.tagName === 'pre' ? 'dark:block' : 'dark:inline']
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
  }
}

const _rehypePrettyCode: RehypePrettyCode = [
  rehypePrettyCodePlugin,
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
      addClassName(
        node,
        '!border-l-[#ff7b81] dark:!border-l-[#ad0008] bg-[#ffd8d8] dark:bg-[#401113] before:!text-accent-6'
      )
    },
    onVisitHighlightedWord(node: Element) {
      addClassName(node, 'bg-[#ffd8d8] dark:bg-[#401113] p-1 rounded-md')
    },
  },
]

const rehypePrettyCode = [
  _rehypePrettyCode,
  rehypeRemoveFragmentDivs,
  rehypeHideCodeBlocks,
]

export { rehypePrettyCode }
