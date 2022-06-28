import React from "react"

import { SectionTitle } from "components/SectionTitle"

import * as styles from "./index.styles.module.scss"

const IndexPage = () => {
  return (
    <main>
      <SectionTitle title="First header" className={styles.sectionTitle} />
      <SectionTitle title="Second header" className={styles.sectionTitle} />
      <SectionTitle title="Third header" className={styles.sectionTitle} />
    </main>
  )
}

export default IndexPage
