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
        <a href="https://ne-raleigh-nc.k9sit.com">North East Raleigh, NC</a>.
      </>
    ),
  },
  {
    title: 'South East Raleigh, NC',
    to: 'https://se-raleigh-nc.k9sit.com',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <a href="https://se-raleigh-nc.k9sit.com">South East Raleigh, NC</a>.
      </>
    ),
  },
  {
    title: 'Wake Forest, NC',
    to: 'https://wake-forest.k9sit.com',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <a href="https://wake-forest.k9sit.com">South West Raleigh, NC</a>.
      </>
    ),
  },
  {
    title: 'North West Raleigh, NC',
    to: 'https://nw-raleigh-nc.k9sit.com',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <a href="https://nw-raleigh-nc.k9sit.com">North West Raleigh, NC</a>.
      </>
    ),
  },
  {
    title: 'South West Raleigh, NC',
    to: 'https://sw-raleigh-nc.k9sit.com',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <a href="https://sw-raleigh-nc.k9sit.com">South West Raleigh, NC</a>.
      </>
    ),
  },
  {
    title: 'Durham, NC',
    to: 'https://durham-nc.k9sit.com',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          <a href="https://durham-nc.k9sit.com">Durham, NC</a>.
      </>
    ),
  },
  {
    title: 'Chapel Hill, NC',
    to: 'https://chapel-hill-nc.k9sit.com',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          <a href="https://chapel-hill-nc.k9sit.com">Chapel Hill, NC</a>.
      </>
    ),
  },
  {
    title: 'Apex, NC',
    to: 'https://apex-nc.k9sit.com',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          <a href="https://apex-nc.k9sit.com">Apex, NC</a>.
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
