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
      id: 1,
      location: 'Antsobolo, Antananarivo',
      date: '21/02/24',
      coordonne: 'lavitra',

      image: 'assets/sary.jpg',
      distance: '10m',
    },
    {
      id: 1,
      location: 'Antsobolo, Antananarivo',
      date: '21/02/24',
      coordonne: 'lavitra',

      image: 'assets/sary.jpg',
      distance: '10m',
    },
    {
      id: 1,
      location: 'Antsobolo, Antananarivo',
      date: '21/02/24',
      coordonne: 'lavitra',

      image: 'assets/sary.jpg',
      distance: '10m',
    },
    {
      id: 1,
      location: 'Antsobolo, Antananarivo',
      date: '21/02/24',
      coordonne: 'lavitra',

      image: 'assets/sary.jpg',
      distance: '10m',
    },
    
  ];

  return (
    <>
      <div className="list-content">
        <div className="lc-text">
          <H1> Liste des alertes</H1>
        </div>
        <div className="lc-container">
          <CardAlert donnee={fako} />
        </div>
      </div>
    </>
  );
}
