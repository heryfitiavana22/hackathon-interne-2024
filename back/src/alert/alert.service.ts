import { PrismaClient } from '@prisma/client';
import {
  CreateAlertInput,
  Alert,
  UpdateAlertInput,
  FindAlertInput,
} from './interfaces/alert.interface';
import { AlertState } from './alert.helper';

export class AlertService {
  constructor(private prisma: PrismaClient) {}

  find = (input?: FindAlertInput) => {
    return this.prisma.alert.findMany({ where: input?.where });
  };

  findById = (id: number) => {
    return this.prisma.alert.findUnique({ where: { id } });
  };

  create = (alert: CreateAlertInput) => {
    return this.prisma.alert.create({
      data: {
        ...alert,
        isPicked: false,
        state: AlertState.NOT_PICKED,
        truckId: null,
      },
    });
  };

  update = (alert: UpdateAlertInput) => {
    return this.prisma.alert.update({ where: { id: alert.id }, data: alert });
  };

  deleteById = (id: number) => {
    return this.prisma.alert.delete({ where: { id } });
  };
}
