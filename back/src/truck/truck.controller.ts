import { NextFunction, Request, Response } from 'express';
import { TruckService } from './truck.service';
import { ResponseAPI } from '../helpers/response.api';
import { TruckTransformer } from './transformers/truck.transformer';
import { truckSchemaAdd } from './validators/truck.zod';
import { Hash } from '../helpers/hash';
import { AccessToken, RefreshToken } from '../auth/auth.sign';
import { CustomerError } from '../helpers/customer-error';
import { CreateTruckInput } from './interfaces/truck.interface';

export class TruckController {
  constructor(private service: TruckService) {}

  findById = async (
    request: Request<{ id: string }>,
    response: Response,
    next: NextFunction,
  ) => {
    try {
      const id = Number(request.params.id);
      if (isNaN(id)) throw new CustomerError(400, 'ID must be a number');
      const truck = await this.service.findById(id);
      if (!truck) throw new CustomerError(400, 'Truck not found');
      const data = TruckTransformer.toUIone(truck);
      response.send(ResponseAPI.success({ data }));
    } catch (error) {
      next(error);
    }
  };

  me = async (request: Request, response: Response) => {
    const token = request.headers['x-access-token'] as string;

    try {
      const truck = AccessToken.verify(token);
      response.send(ResponseAPI.success({ data: truck }));
    } catch (error) {
      response
        .status(403)
        .json(ResponseAPI.error({ message: 'Token invalide.' }));
    }
  };

  create = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const parsed = truckSchemaAdd.parse(request.body);
      const truck = parsed as CreateTruckInput;
      const newTruck = await this.service.create({
        ...truck,
        password: Hash.make(truck.password),
      });
      const data = TruckTransformer.toUIone(newTruck);
      return response.send(ResponseAPI.success({ data }));
    } catch (error) {
      next(error);
    }
  };

  deleteById = async (
    request: Request<{ id: string }>,
    response: Response,
    next: NextFunction,
  ) => {
    try {
      const id = Number(request.params.id);
      if (isNaN(id)) throw new CustomerError(400, 'ID must be a number');

      const truck = await this.service.deleteById(id);
      const data = TruckTransformer.toUIone(truck);
      response.send(
        ResponseAPI.success({ data, message: 'Delete successful' }),
      );
    } catch (error) {
      next(error);
    }
  };
}
