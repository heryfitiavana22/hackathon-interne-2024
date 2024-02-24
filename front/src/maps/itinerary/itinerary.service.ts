import axios from 'axios';
import { Coords } from './ititnerary.type';

const API_KEYs = ['e4422fcc-1845-4eb0-9b7e-45d98e213183'];
const GRAPHHOPPER = 'https://graphhopper.com/api/';

export class ItineraryService {
  static async getItinerary(from: Coords, to: Coords) {
    console.log('getItenerary');
    // on a une limite au nombre de requete
    // donc, il faut basculer à l'API_KEY suivant s'il atteint la limite
    for (let key of API_KEYs) {
      const response = await getResponse(from, to, key);
      console.log(response);

      if (response.status === 200) {
        // number[][] to Coordinate[]
        console.log('okkk');

        return coordsAdapter(response.data.paths[0].points.coordinates);
      }
    }

    // default
    return coordsAdapter([]);
  }
}

function coordsAdapter(coordinates: number[][]): Coords[] {
  return coordinates.map((coordinate) => ({
    latitude: coordinate[1],
    longitude: coordinate[0],
  }));
}

async function getResponse(from: Coords, to: Coords, key: string) {
  let baseURL = `${GRAPHHOPPER}1/route/?point=${from.latitude},${from.longitude}&point=${to.latitude},${to.longitude}`;
  return await axios.get(baseURL, {
    params: {
      profile: 'car',
      locale: 'fr',
      key,
      points_encoded: false,
      algorithm: 'alternative_route',
      'ch.disable': true,
    },
  });
}
