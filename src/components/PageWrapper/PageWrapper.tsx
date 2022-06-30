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
  const title = "Josh Rounsville # Front-end development"
  const description =
    "I'm a front-end developer living and working in Portland, Oregon."

  return (
    <>
      <Helmet
        htmlAttributes={{
          class: htmlClassName,
        }}
        bodyAttributes={{
          class: bodyClassName,
        }}
      >
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="msapplication-TileColor" content="#3372DF"></meta>
      </Helmet>
      <main className={cx(styles.container, className)}>{children}</main>
    </>
  )
}
