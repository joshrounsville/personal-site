import React from "react"
import { Helmet } from "react-helmet"
import cx from "classnames"

import * as styles from "./styles.module.scss"

interface IPageWrapperProps {
  children: React.ReactNode
  className?: string
  bodyClassName?: string
  htmlClassName?: string
}

export function PageWrapper({
  children,
  className,
  bodyClassName,
  htmlClassName,
}: IPageWrapperProps) {
  return (
    <>
      <Helmet
        htmlAttributes={{
          class: htmlClassName,
        }}
        bodyAttributes={{
          class: bodyClassName,
        }}
      />
      <main className={cx(styles.container, className)}>{children}</main>
    </>
  )
}
