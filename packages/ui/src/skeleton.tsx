import { cx } from '@tszhong0411/utils'
import React from 'react'

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>

const Skeleton = (props: SkeletonProps) => {
  const { className, ...rest } = props

  return (
    <div
      className={cx('animate-pulse rounded-md bg-accent-2', className)}
      {...rest}
    />
  )
}

export { Skeleton }
