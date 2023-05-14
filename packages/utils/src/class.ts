import { cva, VariantProps } from 'class-variance-authority'
import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const cx = (...classes: ClassValue[]) => {
  return twMerge(clsx(...classes))
}

export { cva, cx, type VariantProps }
