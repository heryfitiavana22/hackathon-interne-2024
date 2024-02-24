import { Coords } from '../ititnerary.type';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import './itinerary.css';
import 'leaflet/dist/leaflet.css';
import { useItinerary } from '../use-itinerary';

export default function DrawItinerary({ from, to }: P) {
  const coords = useItinerary(from, to);
  return (
    <div>
      <p>Maps</p>
      <MapContainer
        center={[-15.505, 47.527]}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: '1000vh',
          width: '100vw',
          position: 'relative',
          left: '280px',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline
          pathOptions={{ color: 'lime' }}
          positions={coords.map((el) => [el.latitude, el.longitude])}
        />
      </MapContainer>
    </div>
  );
}

type P = {
  from: Coords;
  to: Coords;
};
