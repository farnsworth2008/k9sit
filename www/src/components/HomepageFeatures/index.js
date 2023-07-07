import React, { useEffect, useState } from "react";
import clsx from 'clsx';
import styles from './styles.module.css';

const zipMap = {
  "27401": "Durham, NC",
  "27402": "Durham, NC",
  "27403": "Durham, NC",
  "27404": "Durham, NC",
  "27405": "Durham, NC",
  "27406": "Durham, NC",
  "27407": "Durham, NC",
  "27408": "Durham, NC",
  "27409": "Durham, NC",
  "27410": "Durham, NC",
  "27411": "Durham, NC",
  "27412": "Durham, NC",
  "27413": "Durham, NC",
  "27415": "Durham, NC",
  "27416": "Durham, NC",
  "27417": "Durham, NC",
  "27419": "Durham, NC",
  "27420": "Durham, NC",
  "27425": "Durham, NC",
  "27427": "Durham, NC",
  "27429": "Durham, NC",
  "27435": "Durham, NC",
  "27438": "Durham, NC",
  "27455": "Durham, NC",
  "27495": "Durham, NC",
  "27497": "Durham, NC",
  "27498": "Durham, NC",
  "27499": "Durham, NC",
  "27501": "Angier, NC",
  "27502": "Apex, NC",
  "27511": "Cary, NC",
  "27512": "Cary, NC",
  "27513": "Cary, NC",
  "27518": "Cary, NC",
  "27519": "Cary, NC",
  "27523": "Apex, NC",
  "27526": "Raleigh, NC",
  "27529": "Raleigh, NC",
  "27539": "Apex, NC",
  "27540": "Raleigh, NC",
  "27545": "Raleigh, NC",
  "27560": "Raleigh, NC",
  "27562": "Raleigh, NC",
  "27571": "Raleigh, NC",
  "27587": "Raleigh, NC",
  "27588": "Raleigh, NC",
  "27591": "Raleigh, NC",
  "27592": "Raleigh, NC",
  "27597": "Raleigh, NC",
  "27601": "Raleigh, NC",
  "27602": "Raleigh, NC",
  "27603": "Raleigh, NC",
  "27604": "Raleigh, NC",
  "27605": "Raleigh, NC",
  "27606": "Raleigh, NC",
  "27607": "Raleigh, NC",
  "27608": "Raleigh, NC",
  "27609": "Raleigh, NC",
  "27610": "Raleigh, NC",
  "27611": "Raleigh, NC",
  "27612": "Raleigh, NC",
  "27613": "Raleigh, NC",
  "27614": "Raleigh, NC",
  "27615": "Raleigh, NC",
  "27616": "Raleigh, NC",
  "27617": "Raleigh, NC",
  "27619": "Raleigh, NC",
  "27620": "Raleigh, NC",
  "27622": "Raleigh, NC",
  "27623": "Raleigh, NC",
  "27624": "Raleigh, NC",
  "27625": "Raleigh, NC",
  "27626": "Raleigh, NC",
  "27627": "Raleigh, NC",
  "27628": "Raleigh, NC",
  "27629": "Raleigh, NC",
  "27634": "Raleigh, NC",
  "27635": "Raleigh, NC",
  "27636": "Raleigh, NC",
  "27640": "Raleigh, NC",
  "27650": "Raleigh, NC",
  "27656": "Raleigh, NC",
  "27658": "Raleigh, NC",
  "27661": "Raleigh, NC",
  "27668": "Raleigh, NC",
  "27675": "Raleigh, NC",
  "27676": "Raleigh, NC",
  "27690": "Raleigh, NC",
  "27695": "Raleigh, NC",
  "27697": "Raleigh, NC",
  "27698": "Raleigh, NC",
  "27699": "Raleigh, NC",
  "27701": "Durham, NC",
  "27702": "Durham, NC",
  "27703": "Durham, NC",
  "27704": "Durham, NC",
  "27705": "Durham, NC",
  "27706": "Durham, NC",
  "27707": "Durham, NC",
  "27708": "Durham, NC",
  "27709": "Durham, NC",
  "27710": "Durham, NC",
  "27711": "Durham, NC",
  "27712": "Durham, NC",
  "27713": "Durham, NC",
  "27715": "Durham, NC",
  "27717": "Durham, NC",
  "27722": "Durham, NC",
  "28031": "Charlotte, NC",
  "28035": "Charlotte, NC",
  "28036": "Charlotte, NC",
  "28070": "Charlotte, NC",
  "28078": "Charlotte, NC",
  "28105": "Charlotte, NC",
  "28106": "Charlotte, NC",
  "28126": "Charlotte, NC",
  "28130": "Charlotte, NC",
  "28134": "Charlotte, NC",
  "28200": "Charlotte, NC",
  "28201": "Charlotte, NC",
  "28202": "Charlotte, NC",
  "28203": "Charlotte, NC",
  "28204": "Charlotte, NC",
  "28205": "Charlotte, NC",
  "28206": "Charlotte, NC",
  "28207": "Charlotte, NC",
  "28208": "Charlotte, NC",
  "28209": "Charlotte, NC",
  "28210": "Charlotte, NC",
  "28211": "Charlotte, NC",
  "28212": "Charlotte, NC",
  "28213": "Charlotte, NC",
  "28214": "Charlotte, NC",
  "28215": "Charlotte, NC",
  "28216": "Charlotte, NC",
  "28217": "Charlotte, NC",
  "28218": "Charlotte, NC",
  "28219": "Charlotte, NC",
  "28220": "Charlotte, NC",
  "28221": "Charlotte, NC",
  "28222": "Charlotte, NC",
  "28223": "Charlotte, NC",
  "28224": "Charlotte, NC",
  "28226": "Charlotte, NC",
  "28227": "Charlotte, NC",
  "28228": "Charlotte, NC",
  "28229": "Charlotte, NC",
  "28230": "Charlotte, NC",
  "28231": "Charlotte, NC",
  "28232": "Charlotte, NC",
  "28233": "Charlotte, NC",
  "28234": "Charlotte, NC",
  "28235": "Charlotte, NC",
  "28236": "Charlotte, NC",
  "28237": "Charlotte, NC",
  "28241": "Charlotte, NC",
  "28242": "Charlotte, NC",
  "28243": "Charlotte, NC",
  "28244": "Charlotte, NC",
  "28246": "Charlotte, NC",
  "28247": "Charlotte, NC",
  "28253": "Charlotte, NC",
  "28254": "Charlotte, NC",
  "28255": "Charlotte, NC",
  "28256": "Charlotte, NC",
  "28258": "Charlotte, NC",
  "28260": "Charlotte, NC",
  "28262": "Charlotte, NC",
  "28263": "Charlotte, NC",
  "28265": "Charlotte, NC",
  "28266": "Charlotte, NC",
  "28269": "Charlotte, NC",
  "28270": "Charlotte, NC",
  "28271": "Charlotte, NC",
  "28272": "Charlotte, NC",
  "28273": "Charlotte, NC",
  "28274": "Charlotte, NC",
  "28275": "Charlotte, NC",
  "28277": "Charlotte, NC",
  "28278": "Charlotte, NC",
  "28280": "Charlotte, NC",
  "28281": "Charlotte, NC",
  "28282": "Charlotte, NC",
  "28284": "Charlotte, NC",
  "28285": "Charlotte, NC",
  "28287": "Charlotte, NC",
  "28288": "Charlotte, NC",
  "28289": "Charlotte, NC",
  "28290": "Charlotte, NC",
  "28296": "Charlotte, NC",
  "28297": "Charlotte, NC",
  "28299": "Charlotte, NC",
};

const LocationList = [
  {
    title: 'Anywhere',
    to: 'https://anywhere.k9sit.com',
    Svg: require('@site/static/site/airdale.svg').default,
    description: (
      <>
        <a href="https://anywhere.k9sit.com">Anywhere, USA</a>
      </>
    ),
  },
  {
    title: 'Angier, NC',
    to: 'https://angier-nc.k9sit.com',
    Svg: require('@site/static/site/basset.svg').default,
    description: (
      <>
        <a href="https://angier-nc.k9sit.com">Angier, NC</a>
      </>
    ),
  },
  {
    title: 'Raleigh, NC',
    to: 'https://raleigh-nc.k9sit.com',
    Svg: require('@site/static/site/australian.svg').default,
    description: (
      <>
        <a href="https://raleigh-nc.k9sit.com">Raleigh, NC</a>
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
                  console.log(event);
                  const { value } = event.target;
                  setZipcode(value.replace(/[^\d{5}]$/, "").substring(0, 5));
                  if (zipMap[value] != null) {
                    FilteredLocationList = [];
                    LocationList.forEach(location => {
                      if (location.title == zipMap[value]) {
                        FilteredLocationList.push(location);
                      }
                    })
                  } else if (value == "") {
                    FilteredLocationList = LocationList;
                  } else {
                    let stateCode = "";

                    if (value.startsWith("2")) {
                      stateCode = "NC";
                    }

                    FilteredLocationList = [LocationList[0]];
                    LocationList.forEach(location => {
                      if (location.title.endsWith(", " + stateCode)) {
                        FilteredLocationList.push(location);
                      }
                    })
                  }
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
