import React from 'react';
import LocationIcon from '../../components/icons/loction';
import DateIcon from '../../components/icons/date';
import CoordonneIcon from '../../components/icons/coordonne';
import YesIcon from '../../components/icons/yex';
import CrossIcon from '../../components/icons/cross';

export default function CardAlertState({ donnee }) {
  return (
    <>
      {donnee.map((item) => (
        <div className="lc-box" key={item.id}>
          <div className="lc-img">
            <img src={item.image} alt="sary" className="img" />
          </div>
          <div className="lc-right">
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
            <div className="state">
              {item.etat === 'true' ? <YesIcon className="yes"/> : <CrossIcon className="no"/>}
            </div>
            {/* <Button className="lc-btn">Prendre</Button> */}
          </div>
        </div>
      ))}
    </>
  );
}
