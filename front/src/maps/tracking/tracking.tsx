import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './tracking.css';
import 'leaflet/dist/leaflet.css';
import { socket, subscribeTracking, trucksTracked } from '../../socket-io';
import { TruckCoords } from './tracking.type';

function Tracking() {
  const [trucks, setTrucks] = useState<TruckCoords[]>(trucksTracked);
  console.log(trucks);

  useEffect(() => {
    subscribeTracking((trucks) => {
      console.log('trucks');
      console.log(trucks);

      setTrucks(trucks);
    });
  }, []);
  return (
    <div>
      <MapContainer
        center={[-15.505, 47.527]}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: '100vh',
          width: '100vw',
          position: 'relative',
          left: '0',
        }}
      >
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {trucks.map((tr, i) => (
          <Marker position={[tr.latitude, tr.latitude]} key={i}>
            <Popup>Position Actuel</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Tracking;
