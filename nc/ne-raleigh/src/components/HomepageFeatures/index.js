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
          Call me at <b>919-809-9328</b> to get started.
        </p>
      </>
    ),
  },
  {
    title: 'Rover Profile',
    to: '/docs/rover',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We have a <a href="https://www.rover.com/members/mark-f-high-quality-dog-training/">Rover Service</a> to provide dog boarding and doggy day care.
      </>
    ),
  },
  {
    title: 'Reviews',
    to: 'https://www.rover.com/members/mark-f-high-quality-dog-training',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Our customers love us!
        
        You can read our reviews on <a href="https://www.rover.com/members/mark-f-high-quality-dog-training/">Rover</a>.
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
