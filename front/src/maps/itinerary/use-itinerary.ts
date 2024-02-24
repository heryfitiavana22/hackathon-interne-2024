import { useEffect, useState } from 'react';
import { Coords } from './ititnerary.type';
import { ItineraryService } from './itinerary.service';

export function useItinerary(from: Coords, to: Coords) {
  const [coordinates, setCoordinates] = useState([] as Coords[]);
  console.log('kk');

  useEffect(() => {
    console.log('pp');

    new Promise(async (resolve) => {
      console.log('ooo');

      const coords = await ItineraryService.getItinerary(from, to);
      setCoordinates(coords);
      resolve('');
    });
  }, [from]);

  return coordinates;
}
