import React from 'react';
import { Button } from './../../components/button/button';
import './list-alert.css';
import CardAlert from './components/card-alert';

export function ListAlert() {
  const fako = [
    {
      id : 1,
      location : "Antsobolo",
      date : "21/02/24",
      coordonne : "any ehh",
      image : "assets/sary.jpg",
      distance : "10m"
    },
    {
      id : 1,
      location : "Antsobolo",
      date : "21/02/24",
      coordonne : "any ehh",
      image : "assets/sary.jpg",
      distance : "10m"
    },
    {
      id : 1,
      location : "Antsobolo",
      date : "21/02/24",
      coordonne : "any ehh",
      image : "assets/sary.jpg",
      distance : "10m"
    },
  ]

  return (
    <>
      <div className="list-content">
        <div className="lc-container">
          <CardAlert donnee={fako}/>
        </div>
      </div>
    </>
  );
}
