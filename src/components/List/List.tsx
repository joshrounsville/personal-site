import React from "react"
import cx from "classnames"

import * as styles from "./styles.module.scss"

interface IListProps {
  items: string[]
  className?: string
}

export function List({ items, className }: IListProps) {
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
