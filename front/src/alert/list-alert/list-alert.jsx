import React from 'react';
import { Button } from './../../components/button/button';
import './list-alert.css';

export function ListAlert() {
  return (
    <>
      <div className="list-content">
        <div className="lc-container">
          <div className="lc-box">
            <div className="lc-img">
              <div className="lc-distance">
                <p>10m pres de vous</p>
              </div>
              <img src="assets/sary.jpg" alt="sary" className="img" />
            </div>
            <ul className="lc-list">
              <li>antsobolo</li>
              <li className='grey'>date</li>
              <li className='grey'>coordoner</li>
            </ul>
          </div>
          <div className="lc-box">
            <div className="lc-img">
              <img src="assets/sary.jpg" alt="sary" className="img" />
            </div>
            <ul className="lc-list">
              <li>
                <span className="lc-title">Lieu:</span> antsobolo
              </li>
              <li>
                <span className="lc-title">Date:</span> date
              </li>
              <li>
                <span className="lc-title">coordoner:</span> coordoner
              </li>
            </ul>
          </div>
          <div className="lc-box">
            <div className="lc-img">
              <img src="assets/sary.jpg" alt="sary" className="img" />
            </div>
            <ul className="lc-list">
              <li>
                <span className="lc-title">Lieu:</span> antsobolo
              </li>
              <li>
                <span className="lc-title">Date:</span> date
              </li>
              <li>
                <span className="lc-title">coordoner:</span> coordoner
              </li>
            </ul>
          </div>
          <div className="lc-box">
            <div className="lc-img">
              <img src="assets/sary.jpg" alt="sary" className="img" />
            </div>
            <ul className="lc-list">
              <li>
                <span className="lc-title">Lieu:</span> antsobolo
              </li>
              <li>
                <span className="lc-title">Date:</span> date
              </li>
              <li>
                <span className="lc-title">coordoner:</span> coordoner
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
