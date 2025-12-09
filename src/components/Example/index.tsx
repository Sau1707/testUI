import clsx from 'clsx'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import styles from './styles.module.css'

export type ExampleTone = 'neutral' | 'info' | 'warning'

export interface ExampleProps extends ComponentPropsWithoutRef<'section'> {
  heading: string
  body?: string
  tone?: ExampleTone
  fullWidth?: boolean
  children?: ReactNode
}

export function Example({
  heading,
  body,
  tone = 'neutral',
  fullWidth = false,
  children,
  className,
  ...props
}: ExampleProps) {
  const style = clsx(
    styles.example,
    styles[`example--${tone}`],
    { [styles['example--full']]: fullWidth },
    className,
  )

  return (
    <section
      className={style}
      {...props}
    >
      <div className={styles.header}>
        <span className={styles.badge}>{tone}</span>
        <h2 className={styles.heading}>{heading}</h2>
      </div>

      {body ? <p className={styles.body}>{body}</p> : null}

      {children ? <div className={styles.content}>{children}</div> : null}
    </section>
  )
}
