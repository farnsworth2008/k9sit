import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dog Training',
    to: '/docs/02-at-home-training',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <p>
          Our <a href="/docs/02-at-home-training">dog training</a> program improves the lives of dogs and their owners.
        </p>
        <p>
          &nbsp;
        </p>
        <p>
          Call or text <b>919-809-9328</b> to schedule services.
        </p>
      </>
    ),
  },
  {
    title: 'Dog Sitting',
    to: '/docs/dog-sitting',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <p>
          Our <a href="/docs/dog-sitting">dog sitting</a> program provides high quality dog care when you are a away from home.
        </p>
        <p>
          &nbsp;
        </p>
        <p>
          Call or text <b>919-809-9328</b> to schedule services.
        </p>
      </>
    ),
  },
  {
    title: 'Dog Psychology',
    to: '/docs/psychology',
    Svg: require('@site/static/img/psych.svg').default,
    description: (
      <>
        <p>
          Our <a href="/docs/psychology">Dog Psychology</a> services can help
          your dog resolve issues with anxiety, aggression, leash reactivity,
          neurotic behaviors, and other difficulties.
        </p>
        <p>
          &nbsp;
        </p>
        <p>
          Call or text <b>919-809-9328</b> to schedule services.
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
