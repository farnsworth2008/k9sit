import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const version = '1.0.10';

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
					Call or text Mark at <b>919-809-9328</b> to schedule dog training or
          use the Rover application to book doggy day care and/or dog boarding.
				</p>
  			<p>
          Here at K9Sit.com, our mission is to improve the lives of dogs by
          helping them better understand how to interact with human society.
          We are always positive focused and treat each dog as an individual.
          Our approach keeps a small number of dogs in a residential household
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
