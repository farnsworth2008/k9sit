import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dog Training',
    to: '/docs/dog-training',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <p>
          We have a <a href="/docs/dog-training">dog training</a> program to improve the lives of dogs and their owners.
        </p>
        <p>
          &nbsp;
        </p>
        <p>
          Call or text <b>K9Sit.com</b> at <b>919-809-9328</b> to schedule services.
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
