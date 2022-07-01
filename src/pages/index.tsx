import React from "react"

import { PageWrapper } from "components/PageWrapper"

import * as styles from "./index.styles.module.scss"

function IndexPage() {
  return (
    <PageWrapper htmlClassName={styles.homePage} className={styles.wrapper}>
      <h1 className={styles.title}>Josh Rounsville</h1>
      <h2 className={styles.subtitle}>Web and Native App Development</h2>
      <p>
        <a
          href="mailto:joshuarounsville@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={styles.emailLink}
        >
          joshuarounsville@gmail.com
        </a>
      </p>
    </PageWrapper>
  )
}

export default IndexPage
