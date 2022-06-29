import React from "react"
import cx from "classnames"

import * as styles from "./styles.module.scss"

interface IInlineListProps {
  items: string[]
  className?: string
}

export function InlineList({ items, className }: IInlineListProps) {
  return (
    <div className={cx(styles.container, className)}>
      <ul className={styles.list}>
        {items.map((item) => {
          return (
            <li key={item} className={styles.listItem}>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
