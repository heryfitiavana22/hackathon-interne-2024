import { createData, getData, updateDataById } from '../helpers/repository';
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

  static setPickedAlert(alertId: number, truckId: number) {
    return updateDataById('/alert', alertId.toString(), {
      isPicked: true,
      truckId,
    });
  }

  static create(data: any) {
    return createData('alert', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}
