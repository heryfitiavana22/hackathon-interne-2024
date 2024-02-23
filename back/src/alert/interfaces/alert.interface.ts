import { Prisma } from '@prisma/client';

export interface Alert extends Prisma.AlertGetPayload<{}> {}

export interface FindAlertInput {
  where?: Partial<Alert>;
}

export interface CreateAlertInput
  extends Omit<
    Alert,
    'createdAt' | 'id' | 'updatedAt' | 'isPicked' | 'state' | 'truckId'
  > {}

export interface UpdateAlertInput
  extends Partial<Omit<Alert, 'createdAt' | 'id' | 'updatedAt'>> {
  id: number;
}

export interface AlertUI extends Alert {}
