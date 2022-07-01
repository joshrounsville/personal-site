import React from "react"

import { PageWrapper } from "components/PageWrapper"

import * as styles from "./freelance.styles.module.scss"

function FreelancePage() {
  return (
    <PageWrapper className={styles.wrapper}>
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

      <ul>
        <li>
          <strong>Current</strong>
        </li>
        <li>
          Senior Software Engineer at <a href="https://shopify.com">Shopify</a>{" "}
          working on the <a href="https://shop.app/">Shop App</a>
        </li>
        <li>
          Associate Technology Director at{" "}
          <a href="https://work.co">Work & Co</a>
        </li>
        <li>
          Senior Interactive Developer at{" "}
          <a href="https://thisisthebrigade.com">The Brigade</a>
        </li>
      </ul>
      <ul>
        <li>
          <strong>Projects</strong>
        </li>
        <li>
          <a href="https://aesop.com">Aesop</a>
        </li>
        <li>
          <a href="https://apps.apple.com/us/app/equinox/id318815572">
            Equinox+ iOS and Android Apps (React Native)
          </a>
        </li>
        <li>
          <a href="https://play.google.com/store/apps/details?id=com.dailyharvest.android">
            Daily Harvest iOS and Android App (React Native)
          </a>
        </li>
        <li>
          <a href="https://www.hrblock.com/">H&R Block</a>
        </li>
        <li>
          <a href="https://myhopcard.com/home/">Hop Card Fastpass</a>
        </li>
        <li>
          <a href="https://lunarsaloon.com/">Lunar Saloon</a>
        </li>
      </ul>

      <ul>
        <li>
          <strong>Rate:</strong> $150/hr
        </li>
        <li>
          Alternatively a project rate can be arrainged on a case-by-case basis
        </li>
        <li>
          <strong>Availability:</strong> 10-20 hours/week
        </li>
      </ul>
    </PageWrapper>
  )
}

export default FreelancePage
