import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const version = '1.130.0';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">K9Sit.com</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>
					v{version}
				</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="K9Sit.com"
      description="The K9Sit.com project">
      <main>
        <HomepageHeader />
        <HomepageFeatures />
        <hr/>
        <iframe
        allowfullscree
        frameborder="0"
        height="881"
        src="https://www.youtube.com/embed/ruqarQifs-0"
        title="Walk"
        width="100%"
        />                
        <hr/>
        <center>
        <img src="/img/zeus.jpg" width="400"></img>
        </center>
      </main>
    </Layout>
  );
}
