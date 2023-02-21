import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const version = '1.0.57';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
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
      title={`${siteConfig.title}`}
      description="K9 Site">
      <main>
        <HomepageHeader />
        <HomepageFeatures />
        <hr/>
        <a href="https://www.rover.com/members/mark-f-high-quality-dog-training/"><img src="/img/rover.jpg" /></a> 
        <hr/>
        <iframe 
        width="100%"
        height="881" 
        src="https://www.youtube.com/embed/AxVMHu9aWJ0"
        title="Rainy days with Tig"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </main>
    </Layout>
  );
}
