import React, { useState } from 'react';
import LocationIcon from '../../../components/icons/loction';
import DateIcon from '../../../components/icons/date';
import CoordonneIcon from '../../../components/icons/coordonne';
import { Button } from '../../../components/button/button';


export default function CardAlert({ donnee }) {
  // const [data, usedata] = useState(donnee);


  return (
    <>
      {donnee.map((item) => (
        <div className="lc-box" key={item.id}>
          <div className="lc-img">
            <div className="lc-distance">
              <p>{item.distance} pres de vous</p>
            </div>
            <img src={item.image} alt="sary" className="img" />
          </div>
          <ul className="lc-list">
            <li>
              <LocationIcon /> {item.location}
            </li>
            <li className="grey">
              <DateIcon /> {item.date}
            </li>
            <li className="grey">
              <CoordonneIcon /> {item.coordonne}
            </li>
          </ul>
          <Button className="lc-btn">Prendre</Button>
        </div>
      ))}
    </>
  );
}
