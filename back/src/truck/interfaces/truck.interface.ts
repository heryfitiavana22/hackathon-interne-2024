import { Prisma } from '@prisma/client';

export interface Truck extends Prisma.TruckGetPayload<{}> {}

export interface TruckWithoutPassword extends Omit<Truck, 'password'> {}

export interface FindTruckInput {
  where?: Partial<TruckWithoutPassword>;
}

export interface CreateTruckInput extends Pick<Truck, 'pseudo' | 'password'> {}

export interface UpdateTruckInput {
  id: number;
  name?: string;
  pseudo?: string;
}

export interface TruckUI extends TruckWithoutPassword {}
