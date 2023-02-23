import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'North East Raleigh, NC',
    to: 'https://ne-raleigh-nc.k9sit.com',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <p>
          We have a location in <a href="https://ne-raleigh-nc.k9sit.com">North East Raleigh, NC</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Create your own K9 Sit Page(s)',
    to: '/docs/your-own-k9-sit-site',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Reach out to us to create your
        own <a href="/docs/your-own-k9-sit-site">K9 Sit Site</a>. We will
        provide you with pages on K9Sit.com where we handle all the hosting and
        site editing so you can focus on your dog care services.
      </>
    ),
  }
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
