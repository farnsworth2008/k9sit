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
      title="K9Me.com"
      description="The K9Me.com project">
      <main>
        <HomepageHeader />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
