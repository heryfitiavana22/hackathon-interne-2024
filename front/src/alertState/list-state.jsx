import React from 'react';
import CardAlertState from './components/card-alert-state';

export default function ListeState() {
    const fako = [
        {
          id: 1,
          location: 'Antsobolo, Antananarivo',
          date: '21/02/24',
          coordonne: 'lavitra',
          image: 'assets/sary.jpg',
          distance: '10m',
          etat : 'etat'
        },       
      ];
  return (
    <>
      <div className="list-content">
        <div className="lc-text">
          <H1> Liste des alerts</H1>
        </div>
        <div className="lc-container"><CardAlertState donnee={}/></div>
      </div>
    </>
  );
}
