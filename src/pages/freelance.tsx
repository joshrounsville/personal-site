import React from "react"

import { PageWrapper } from "components/PageWrapper"

import * as styles from "./freelance.styles.module.scss"

function FreelancePage() {
  return (
    <PageWrapper className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerInfo}>
          <h1 className={styles.title}>Josh Rounsville</h1>
          <h2 className={styles.subtitle}>Web and Native App Development</h2>
        </div>
        <p>
          <a
            href="mailto:joshuarounsville@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            joshuarounsville@gmail.com
          </a>
        </p>
      </header>

      <ul className={styles.list}>
        <li>
          <strong>Current</strong>
        </li>
        <li>
          Senior Software Engineer at{" "}
          <a href="https://shopify.com" className={styles.link}>
            Shopify
          </a>{" "}
          working on the{" "}
          <a href="https://shop.app/" className={styles.link}>
            Shop App
          </a>
        </li>
      </ul>

      <ul className={styles.list}>
        <li>
          <strong>Past</strong>
        </li>
        <li>
          Associate Technology Director at{" "}
          <a href="https://work.co" className={styles.link}>
            Work & Co
          </a>
        </li>
        <li>
          Senior Interactive Developer at{" "}
          <a href="https://thisisthebrigade.com" className={styles.link}>
            The Brigade
          </a>
        </li>
      </ul>

      <ul className={styles.list}>
        <li>
          <strong>Selected Projects</strong>
        </li>
        <li>
          <a href="https://aesop.com" className={styles.link}>
            Aesop
          </a>
        </li>
        <li>
          <a
            href="https://apps.apple.com/us/app/equinox/id318815572"
            className={styles.link}
          >
            Equinox+
          </a>{" "}
          iOS and Android Apps (React Native)
        </li>
        <li>
          <a
            href="https://play.google.com/store/apps/details?id=com.dailyharvest.android"
            className={styles.link}
          >
            Daily Harvest
          </a>{" "}
          iOS and Android App (React Native)
        </li>
        <li>
          <a href="https://www.hrblock.com/" className={styles.link}>
            H&R Block
          </a>
        </li>
        <li>
          <a href="https://myhopcard.com/home/" className={styles.link}>
            Hop Card Fastpass
          </a>
        </li>
        <li>
          <a href="https://lunarsaloon.com/" className={styles.link}>
            Lunar Saloon
          </a>
        </li>
      </ul>

      <ul className={styles.list}>
        <li>
          <strong>Rate:</strong> $150/hr
        </li>
        <li>
          Alternatively a project rate can be arranged on a case-by-case basis
        </li>
        <li>
          <strong>Availability:</strong> 10-20 hours/week
        </li>
      </ul>
    </PageWrapper>
  )
}

export default FreelancePage
