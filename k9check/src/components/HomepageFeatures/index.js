import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'K9Check.com Security Work',
    to: '/docs/work',
    Svg: require('@site/static/check.svg').default,
    description: (
      <>
        <p>
          <b><a href="/docs/work">K9Check.com provides security work</a></b> with
          dogs trained to detect firearms.
        </p>
      </>
    ),
  },
  {
    title: 'Our Team',
    to: '/docs/team',
    Svg: require('@site/static/team.svg').default,
    description: (
      <>
        <p>
          The strong and growing <b><a href="/docs/team">K9Check.com team</a></b> exists
          to provide the best dogs for security work.
        </p>
      </>
    ),
  },
  {
    title: 'About K9Check.com',
    to: '/docs/about-k9check',
    Svg: require('@site/static/about.svg').default,
    description: (
      <>
        <p>
          The <b><a href="/docs/about-k9check">K9Check.com project</a></b> trains
          dogs and dog handlers for the task of detecting firearms.
        </p>
        <p>
          &nbsp;
        </p>
        <p>
          Call or text <b>919-809-9328</b> to discuss how we can help you.
        </p>
      </>
    ),
  },
];

function Feature({Svg, to, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
				<a href={to}>
        	<Svg className={styles.featureSvg} role="img" />
				</a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
