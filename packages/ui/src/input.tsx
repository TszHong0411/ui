import { cx } from '@tszhong0411/utils'
import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <input
      ref={ref}
      className={cx(
        [
          'rounded-md border px-3 py-2 outline-none transition-colors duration-150',
          'border-accent-2 bg-accent-bg text-accent-fg',
          'placeholder:text-accent-5 focus:border-accent-5',
          'disabled:cursor-not-allowed disabled:border-accent-2 disabled:bg-accent-1 disabled:text-accent-5 disabled:placeholder:text-accent-3',
        ],
        className
      )}
      {...rest}
    />
  )
})

Input.displayName = 'Input'

export { Input }
