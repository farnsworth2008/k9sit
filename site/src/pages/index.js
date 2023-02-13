import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const version = '1.0.0';

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
				<p>
          At K9 Site our primary focus is Dog Psychology.
        </p>
  			<p>
          Our mission here is to improve the lives of dogs by helping them
          better understand how to interact with human society. We are
          always positive focused and treat each dog as an individual. Our
          approach keeps a small number of dogs in a residential household
          and neighborhood where we can work through issues such as leash
          problems, excessive barking, reactivity, aggression, anxiety, and
          doggy panic attacks. A psychologically healthy dog is a happy dog
          who understands their environment and can build a loving relationship
          with their family. 
        </p>
  			<p>
          We have a simple pricing model and will work with each client to
          define the perfect program for their dog. Some dogs only need a few
          sessions to achieve amazing results. We work with the dog and the their
          owners in personallized sessions.
        </p>
  			<p>
          Call us at <b>919-809-9328</b> anytime between <b>9am and 7pm</b> to
          get started.
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
      </main>
    </Layout>
  );
}
