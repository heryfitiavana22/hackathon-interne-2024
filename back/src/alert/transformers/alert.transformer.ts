import { Alert, AlertUI } from '../interfaces/alert.interface';

export class AlertTransformer {
  static toUI(data: Alert[]): AlertUI[] {
    return data.map((el) => AlertTransformer.toUIone(el));
  }

  static toUIone(el: Alert): AlertUI {
    const { ...rest } = el;
    return rest;
  }
}
