import { io } from 'socket.io-client';
import { TruckCoords } from './maps/tracking/tracking.type';
export const socket = io('http://localhost:3000');

type SubTack = (trucks: TruckCoords[]) => void;
const subscribersOnTracking: SubTack[] = [];
export let trucksTracked: TruckCoords[] = [];
export const subscribeTracking = (s: SubTack) => subscribersOnTracking.push(s);
socket.on('tracking', (trucks: any[]) => {
  trucksTracked = trucks;

  subscribersOnTracking.forEach((el) => el(trucks));
});
