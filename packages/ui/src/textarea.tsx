import { cx } from '@codewithhong/utils'
import React from 'react'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { className, ...rest } = props

    return (
      <textarea
        ref={ref}
        className={cx(
          [
            'w-full rounded-md border px-3 py-2 outline-none transition-colors duration-150',
            'border-accent-2 bg-accent-bg text-accent-fg',
            'placeholder:text-accent-5 focus:border-accent-5',
            'disabled:cursor-not-allowed disabled:border-accent-2 disabled:bg-accent-1 disabled:text-accent-5 disabled:placeholder:text-accent-3',
          ],
          className
        )}
        {...rest}
      />
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
