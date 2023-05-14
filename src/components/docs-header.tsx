'use client'

import {
  IconBrandGithub,
  IconBrandRadixUi,
  IconChevronRight,
  IconPencil,
} from '@tabler/icons-react'
import { cx } from '@tszhong0411/utils'
import { motion } from 'framer-motion'

type DocsHeaderProps = {
  title: string
  description: string
  source?: string
  docs?: string
  api?: string
}

const animation = {
  hide: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
}

const DocsHeader = (props: DocsHeaderProps) => {
  const { title, description, source, docs, api } = props

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-0.5'>
        <div className='text-accent-5'>Docs</div>
        <IconChevronRight className='text-accent-5' />
        <div>{title}</div>
      </div>
      <motion.h1
        className='text-4xl font-bold'
        initial={animation.hide}
        animate={animation.show}
      >
        {title}
      </motion.h1>
      <motion.p
        className='text-xl text-accent-5'
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        {description}
      </motion.p>
      {(source || docs || api) && (
        <div className='mt-8 flex flex-row items-start justify-between'>
          {source && (
            <div
              className={cx(api && 'flex flex-col gap-2 sm:flex-row sm:gap-4')}
            >
              <a
                href={source}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm'
              >
                <IconBrandGithub size={16} />
                View source code
              </a>
              {api && (
                <a
                  href={api}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-sm'
                >
                  <IconBrandRadixUi size={16} />
                  API reference
                </a>
              )}
            </div>
          )}
          {docs && (
            <a
              href={docs}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 text-sm'
            >
              <IconPencil size={16} />
              Edit this page
            </a>
          )}
        </div>
      )}
    </div>
  )
}
export default DocsHeader
