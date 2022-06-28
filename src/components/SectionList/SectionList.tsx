import React from "react"

import { THeaderTypes } from "types/markup"

import * as styles from "./styles.module.scss"

interface ISectionListProps {
  title: string
  titleTag?: THeaderTypes
}

export function SectionList({
  title,
  titleTag: TitleTag = "h3",
}: ISectionListProps) {
  return (
    <div>
      <TitleTag className={styles.title}>{title}</TitleTag>
    </div>
  )
}
