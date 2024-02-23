import { PrismaClient } from '@prisma/client';
import { CreateTruckInput, Truck } from './interfaces/truck.interface';

export class TruckService {
  constructor(private prisma: PrismaClient) {}

  find = () => {
    return this.prisma.truck.findMany();
  };

  findById = (id: number) => {
    return this.prisma.truck.findUnique({ where: { id } });
  };

  findByPseudo = (pseudo: string) => {
    return this.prisma.truck.findFirst({ where: { pseudo } });
  };

  create = (truck: CreateTruckInput) => {
    return this.prisma.truck.create({ data: truck });
  };

  deleteById = (id: number) => {
    return this.prisma.truck.delete({ where: { id } });
  };
}
