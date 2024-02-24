import React from 'react';
import CardAlertState from './components/card-alert-state';
import { H1 } from '../components/typography/typography';
import './list-state.css';

export default function ListeState() {
    const fakoState = [
        {
            id: 1,
            location: 'Antsobolo, Antananarivo',
            date: '21/02/24',
            coordonne: 'lavitra',
            image: 'assets/sary.jpg',
            distance: '10m',
            etat : 'false'
        },
        {
            id: 1,
            location: 'Antsobolo, Antananarivo',
            date: '21/02/24',
            coordonne: 'lavitra',
            image: 'assets/sary.jpg',
            distance: '10m',
            etat : 'true'
        },       
      ];
  return (
    <>
      <div className="list-content">
        <div className="lc-text">
          <H1>Alertes suivies</H1>
        </div>
        <div className="lc-container"><CardAlertState donnee={fakoState}/></div>
      </div>
    </>
  );
}
