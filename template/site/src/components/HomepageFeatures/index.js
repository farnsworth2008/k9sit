import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dog Training',
    to: '/docs/at-home-training',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <p>
          Our <a href="/docs/at-home-training">dog training</a> program improves the lives of dogs and their owners.
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
    title: 'Doggie Daycare',
    to: '/docs/doggie-daycare',
    Svg: require('@site/static/img/daycare.svg').default,
    description: (
      <>
        <p>
          Our <a href="/docs/doggie-daycare">doggie daycare</a> service allows
          your dog to stay in the home of one of our service providers while
          you are at work.
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
    title: 'Dog Walking',
    to: '/docs/dog-walking',
    Svg: require('@site/static/img/dog-walk.svg').default,
    description: (
      <>
        <p>
          Our <a href="/docs/dog-walking">dog walking</a> service walks your dog in your neighborhood.
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
  {
    title: 'Poop Pickup',
    to: '/docs/poop-pickup',
    Svg: require('@site/static/img/poop.svg').default,
    description: (
      <>
        <p>
          Our <a href="/docs/poop-pickup">poop pickup</a> service keeps your yard clean.
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
