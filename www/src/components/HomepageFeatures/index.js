import React, { useEffect, useState } from "react";
import clsx from 'clsx';
import styles from './styles.module.css';

const LocationList = [
  {
    title: 'Daytona Beach, FL',
    to: 'https://daytona-beach-fl.k9sit.com',
    Svg: require('@site/static/img/daytona-beach-fl.svg').default,
    description: (
      <>
        <a href="https://daytona-beach-fl.k9sit.com">Daytona Beach, FL</a>.
      </>
    ),
  },
  {
    title: 'Kent, OH',
    to: 'https://kent-oh.k9sit.com',
    Svg: require('@site/static/img/kent-oh.svg').default,
    description: (
      <>
        <a href="https://kent-oh.k9sit.com">Kent, OH</a>.
      </>
    ),
  },
  {
    title: 'North East Raleigh, NC',
    to: 'https://ne-raleigh-nc.k9sit.com',
    Svg: require('@site/static/img/ne-raleigh-nc.svg').default,
    description: (
      <>
        <a href="https://ne-raleigh-nc.k9sit.com">North East Raleigh, NC</a>.
      </>
    ),
  },
];

let FilteredLocationList = LocationList.slice(0);

function Feature({ Svg, to, title, description }) {
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
  const [zipcode, setZipcode] = useState("");

  const locationsDiv = (
    <div className="row">
      {FilteredLocationList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </div>
  )

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="search" style={{ paddingLeft: '10px', border: '1px' }}>
            <form 
                action=""
                className="form-data"
                onSubmit={e => {
                  e.target[0].blur();
                  e.preventDefault();
                }}
              >

              <label htmlFor="zip">What's your ZIP Code?</label>
              <br />
              <input
                className="zip"
                id="zip"
                name="zip"
                placeholder="XXXXX"
                size="5"
                type="text"
                value={zipcode}

                onChange={(event) => {
                  const { value } = event.target;
                  setZipcode(value.replace(/[^\d{5}]$/, "").substring(0, 5));
                  if (value.startsWith("27") || value.startsWith("28")) {
                    FilteredLocationList = [LocationList[2]];
                  } else if (value.startsWith("32")) {
                    FilteredLocationList = [LocationList[0]];
                  } else if (value.startsWith("44")) {
                    FilteredLocationList = [LocationList[1]];
                  } else {
                    FilteredLocationList = [LocationList[0], LocationList[1], LocationList[2]];
                  }
                  console.log(`ZIP Code changed: ${value}, ${zipcode}`);
                }}
              />
            </form>
          </div>
        </div>
        {locationsDiv}
      </div>
    </section>
  );
}
