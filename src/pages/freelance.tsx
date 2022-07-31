import React from "react"

import { PageWrapper } from "components/PageWrapper"

import * as styles from "./freelance.styles.module.scss"

function FreelancePage() {
  return (
    <PageWrapper className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerInfo}>
          <h1 className={styles.title}>
            <a href="/">Josh Rounsville</a>
          </h1>
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

          <ul className={styles.description}>
            <li>Led the front-end build for global ecommerce site</li>
            <li>React + Custom static renderer</li>
            <li>
              Redux/Reselect/Thunk + Adyen payments + Google Maps instegration
            </li>
          </ul>
        </li>
        <li>
          <a
            href="https://apps.apple.com/us/app/equinox/id318815572"
            className={styles.link}
          >
            Equinox+
          </a>
          <ul className={styles.description}>
            <li>
              Worked with agency and product teams to build iOS and Android Apps
            </li>
            <li>React Native</li>
            <li>GraphQL/Apollo + Typescript + Lottie & D3 animations</li>
          </ul>
        </li>
        <li>
          <a
            href="https://play.google.com/store/apps/details?id=com.dailyharvest.android"
            className={styles.link}
          >
            Daily Harvest
          </a>
          <ul className={styles.description}>
            <li>
              Defined and led re-architecture build for iOS and Android Apps
            </li>
            <li>React Native</li>
            <li>Redux/Sagas + Flow types</li>
          </ul>
        </li>
        <li>
          <a href="https://www.hrblock.com/" className={styles.link}>
            H&R Block
          </a>
          <ul className={styles.description}>
            <li>Led build of framework-agnostic design system</li>
            <li>Web components + Typescript</li>
          </ul>
        </li>
        <li>
          <a href="https://myhopcard.com/home/" className={styles.link}>
            Hop Card Fastpass
          </a>
          <ul className={styles.description}>
            <li>
              Led front-end build for public transportation digital platform
            </li>
            <li>Angular + Node server</li>
          </ul>
        </li>
      </ul>

      <ul className={styles.list}>
        <li>
          <strong>Availability:</strong> 10-20 hours/week
        </li>
        <li>
          Project costs determined by much discussion and thought,
          <br /> but are generally built around a <strong>$150/hr rate</strong>
        </li>
      </ul>
    </PageWrapper>
  )
}

export default FreelancePage
