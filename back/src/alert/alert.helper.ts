import { Coords } from './alert.type';
import { Alert } from './interfaces/alert.interface';

export enum AlertState {
  PICKED = 'PICKED',
  NOT_PICKED = 'NOT_PICKED',
}

function distance(coords1: Coords, coords2: Coords) {
  const R = 6371; // Rayon de la Terre en kilomètres
  const dLat = ((coords2.latitude - coords1.latitude) * Math.PI) / 180;
  const dLon = ((coords2.longitude - coords1.longitude) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((coords1.latitude * Math.PI) / 180) *
      Math.cos((coords2.latitude * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance en kilomètres
  return d;
}

export function sortByProximity(coordonneeA: Coords, alerts: Alert[]) {
  const data = [...alerts];
  data.sort((alert1, alert2) => {
    const distance1 = distance(coordonneeA, {
      latitude: Number(alert1.latitude),
      longitude: Number(alert1.longitude),
    });
    const distance2 = distance(coordonneeA, {
      latitude: Number(alert2.latitude),
      longitude: Number(alert2.longitude),
    });
    return distance1 - distance2;
  });
  return data;
}
