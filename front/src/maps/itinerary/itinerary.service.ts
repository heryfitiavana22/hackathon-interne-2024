import axios from 'axios';
import { Coords } from './ititnerary.type';

const API_KEYs = [
  'd9bc2289-8508-4219-bcff-2d7abdf09c07',
  '7bdd7e22-2f20-4263-b833-15d3d703a874',
  '9a09bb96-843a-4c3b-98bf-6618b033c2fe',
  '70dab084-a84c-4301-bd03-620bc5fc704b',
];
const GRAPHHOPPER = 'https://graphhopper.com/api/';

export class ItineraryService {
  static async getItinerary(from: Coords, to: Coords) {
    console.log('getItenerary');
    // on a une limite au nombre de requete
    // donc, il faut basculer à l'API_KEY suivant s'il atteint la limite
    for (let key of API_KEYs) {
      const response = await getResponse(from, to, key);
      if (response.status === 200) {
        // number[][] to Coordinate[]
        return coordsAdapter(response.data.paths[0].pointss.coordinates);
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
