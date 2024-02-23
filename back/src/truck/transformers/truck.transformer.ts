import { Truck, TruckUI } from '../interfaces/truck.interface';

export class TruckTransformer {
  static toUI(trucks: Truck[]): TruckUI[] {
    return trucks.map((truck) => TruckTransformer.toUIone(truck));
  }

  static toUIone(truck: Truck): TruckUI {
    const { password, ...rest } = truck;
    return rest;
  }
}
