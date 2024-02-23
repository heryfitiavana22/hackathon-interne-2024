import React from 'react';
import { Button } from './../../components/button/button';
import './list-alert.css';
import CardAlert from './components/card-alert';
import { H1 } from '../../components/typography/typography';

export function ListAlert() {
  const fako = [
    {
      id: 1,
      location: 'Antsobolo, Antananarivo',
      date: '21/02/24',
      coordonne: 'lavitra',
      
      image: 'assets/sary.jpg',
      distance: '10m',
    },
    {
      id: 2,
      location: 'Antsobolo, Avaradrano',
      date: '21/02/24',
      coordonne: 'any ehh',
      image: 'assets/sary.jpg',
      distance: '10m',
    },
    {
      id: 3,
      location: 'Antsobolo',
      date: '21/02/24',
      coordonne: 'any ehh',
      image: 'assets/sary.jpg',
      distance: '10m',
    },
    {
      id: 4,
      location: 'Antsobolo',
      date: '21/02/24',
      coordonne: 'any ehh',
      image: 'assets/sary.jpg',
      distance: '10m',
    },
    {
      id: 5,
      location: 'Antsobolo',
      date: '21/02/24',
      coordonne: 'any ehh',
      image: 'assets/sary.jpg',
      distance: '10m',
    },
  ];

  return (
    <>
      <div className="list-content">
        <div className="lc-text">
          <H1> Liste des alerts</H1>
          <p>
            Ici, vous pouvez voir toutes les listes de toutes les alertes signalées dans toute la ville.
          </p>
        </div>
        <div className="lc-container">
          <CardAlert donnee={fako} />
        </div>
      </div>
    </>
  );
}
