import React, { PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'

type Props = PropsWithChildren<{
  id?: string
  className?: string
  innerClassName?: string
  theme?: 'normal' | 'alt'
}>

const HomeSection = ({ id, children, className, innerClassName, theme = 'normal' }: Props) => {
  return (
    <section className={cn(styles.root, { [styles.rootAlt]: theme === 'alt' }, className)} id={id}>
      <div className={cn(styles.content, innerClassName)}>{children}</div>
    </section>
  )
}

export default HomeSection
