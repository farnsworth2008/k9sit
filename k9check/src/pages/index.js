import React from "react";
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-V4EWNJX975">
      </script>

      <script async src="/gtag.js">
      </script>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="K9Check.com"
      description="The K9Check.com project">
      <main>
        <HomepageHeader />
        <HomepageFeatures />
        <hr />        
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          frameborder="0"
          height="881"
          src="https://www.youtube.com/embed/spePcqsJ9Yc?rel=0"
          title="K9Sit.com"
          width="100%"
        />
      </main>

    </Layout>
  );
}
