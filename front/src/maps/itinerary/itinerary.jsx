import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import './itinerary.css';
import 'leaflet/dist/leaflet.css';
import { useParams } from 'react-router-dom';
import { useItinerary } from './use-itinerary';
import DrawItinerary from './components/draw-itinerary';

function Itinerary() {
  const { lat, long } = useParams();
  const [pos, setPos] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((p) => {
      setPos(p.coords);
    });
  }, []);

  if (!pos) return <div>Veuillez autoriser</div>;

  return <DrawItinerary from={pos} to={{ latitude: lat, longitude: long }} />;
}

export default Itinerary;
