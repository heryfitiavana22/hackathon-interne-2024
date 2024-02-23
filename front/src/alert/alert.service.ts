import { getData } from '../helpers/repository';
import { Alert } from './alert.type';
import { toast } from 'sonner';
import queryString from 'query-string';

export class AlertService {
  static getNotPicked() {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const {
            coords: { latitude, longitude },
          } = position;
          resolve(
            getData<Alert[]>(
              '/alert/not-picked',
              queryString.stringify({ latitude, longitude }),
            ),
          );
        },
        () => {
          toast.error("Veuillez autoriser la localisation pour l'application");
          resolve(null);
        },
      );
    });
  }
}
