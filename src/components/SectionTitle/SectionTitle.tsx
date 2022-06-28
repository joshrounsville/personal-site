import React from "react"
import cx from "classnames"

import { THeaderTypes } from "types/markup"

import * as styles from "./styles.module.scss"

interface ISectionTitleProps {
  title: string
  titleTag?: THeaderTypes
  className?: string
}

export function SectionTitle({
  title,
  titleTag: TitleTag = "h3",
  className,
}: ISectionTitleProps) {
  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.titleContainer}>
        <TitleTag className={styles.title}>{title}</TitleTag>
        <span className={styles.borders} />
      </div>
    </div>
  )
}
