import React from "react"

import { SectionTitle } from "components/SectionTitle"
import { InlineList } from "components/InlineList"
import { List } from "components/List"

import * as styles from "./index.styles.module.scss"

const data = {
  clientList: [
    "Alaska Airlines",
    "Aesop",
    "Daily Harvest",
    "Equinox",
    "Facebook",
    "Mozilla",
    "Nike",
    "Spotify",
    "Virgin America",
    "VistaPrint",
  ],
  focusList: [
    "Lightweight + Responsive Web Development",
    "Native App Development",
    "Technical Process + Direction",
    "Technical Leadership",
    "Technical Project Management",
    "Technical Consulting",
  ],
  toolsList: [
    "Javascript",
    "React / React Native / Angular / Vue",
    "NextJS / Gatsby",
    "Contentful / Shopify / Wordpress",
  ],
}

const IndexPage = () => {
  return (
    <main className={styles.wrapper}>
      <SectionTitle title="Client list" className={styles.sectionTitle} />
      <InlineList items={data.clientList} />
      <SectionTitle title="Focus" className={styles.sectionTitle} />
      <List items={data.focusList} className={styles.spacer} />
      <InlineList items={data.toolsList} />
      <SectionTitle title="Experience" className={styles.sectionTitle} />
    </main>
  )
}

export default IndexPage
