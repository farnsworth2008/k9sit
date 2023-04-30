import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'K9Me.com Training',
    to: '/docs/training',
    Svg: require('@site/static/training.svg').default,
    description: (
      <>
        <p>
          <b><a href="/docs/training">K9Me.com provides a training</a></b> program for dog trainers.
        </p>
      </>
    ),
  },
  {
    title: 'K9Me.com Mentoring',
    to: '/docs/mentoring',
    Svg: require('@site/static/mentor.svg').default,
    description: (
      <>
        <p>
          <b><a href="/docs/mentoring">K9Me.com provides a mentoring</a></b> program for dog trainers.
        </p>
      </>
    ),
  },
  {
    title: 'K9Me.com Certification',
    to: '/docs/certification',
    Svg: require('@site/static/diploma.svg').default,
    description: (
      <>
        <p>
          <b><a href="/docs/certification">K9Me.com provides a certification</a></b> program for dog trainers.
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
          The strong and growing <b><a href="/docs/team">K9Me.com team</a></b> exists
          to help new dog trainers succeed.
        </p>
      </>
    ),
  },
  {
    title: 'About K9Me.com',
    to: '/docs/about-k9me',
    Svg: require('@site/static/about.svg').default,
    description: (
      <>
        <p>
          The <b><a href="/docs/about-k9me">K9Me.com project</a></b> helps
          people develop careers as dog trainers. We connect new dog trainers
          with mentors who support them on the journy to success.
        </p>
        <p>
          &nbsp;
        </p>
        <p>
          Call or text <b>919-809-9328</b> to get the discussion started.
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
