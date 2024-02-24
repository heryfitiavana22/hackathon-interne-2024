import { NextFunction, Request, Response } from 'express';
import { AlertService } from './alert.service';
import { ResponseAPI } from '../helpers/response.api';
import { AlertTransformer } from './transformers/alert.transformer';
import {
  alertNotPickedQuerySchema,
  alertSchemaAdd,
  alertSchemaUpdate,
} from './validators/alert.zod';
import { Hash } from '../helpers/hash';
import { AccessToken, RefreshToken } from '../auth/auth.sign';
import { CustomerError } from '../helpers/customer-error';
import {
  CreateAlertInput,
  UpdateAlertInput,
} from './interfaces/alert.interface';
import { AlertState, sortByProximity } from './alert.helper';

export class AlertController {
  constructor(private service: AlertService) {}

  alertNotPicked = async (
    request: Request,
    response: Response,
    next: NextFunction,
  ) => {
    try {
      const parsed = alertNotPickedQuerySchema.parse(request.query);
      const alerts = await this.service.find({
        where: { state: AlertState.NOT_PICKED },
      });
      const data = AlertTransformer.toUI(alerts);
      const sorted = sortByProximity(parsed as any, data);
      response.send(ResponseAPI.success({ data: sorted }));
    } catch (error) {
      next(error);
    }
  };

  findById = async (
    request: Request<{ id: string }>,
    response: Response,
    next: NextFunction,
  ) => {
    try {
      const id = Number(request.params.id);
      if (isNaN(id)) throw new CustomerError(400, 'ID must be a number');
      const alert = await this.service.findById(id);
      if (!alert) throw new CustomerError(400, 'Alert not found');
      const data = AlertTransformer.toUIone(alert);
      response.send(ResponseAPI.success({ data }));
    } catch (error) {
      next(error);
    }
  };

  create = async (request: Request, response: Response, next: NextFunction) => {
    try {
      console.log(request.body);

      const parsed = alertSchemaAdd.parse(request.body);
      const alert = parsed as CreateAlertInput;
      const imageURL = request.file?.path.replace('public', '') || null;
      const newAlert = await this.service.create({
        ...alert,
        imageURL,
      });
      const data = AlertTransformer.toUIone(newAlert);
      return response.send(ResponseAPI.success({ data }));
    } catch (error) {
      next(error);
    }
  };

  updateById = async (
    request: Request<{ id: string }>,
    response: Response,
    next: NextFunction,
  ) => {
    try {
      const id = Number(request.params.id);
      if (isNaN(id)) throw new CustomerError(400, 'ID must be a number');
      const parsed = alertSchemaUpdate.parse(request.body);
      const alert = parsed as UpdateAlertInput;
      const newAlert = await this.service.update({
        id,
        ...alert,
      });
      const data = AlertTransformer.toUIone(newAlert);
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

      const alert = await this.service.deleteById(id);
      const data = AlertTransformer.toUIone(alert);
      response.send(
        ResponseAPI.success({ data, message: 'Delete successful' }),
      );
    } catch (error) {
      next(error);
    }
  };
}
