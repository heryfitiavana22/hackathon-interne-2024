import { NextFunction, Request, Response } from 'express';
import { TruckService } from '../truck/truck.service';
import { truckSchemaLogin } from '../truck/validators/truck.zod';
import { CreateTruckInput } from '../truck/interfaces/truck.interface';
import { TruckTransformer } from '../truck/transformers/truck.transformer';
import { AccessToken, RefreshToken } from './auth.sign';
import { ResponseAPI } from '../helpers/response.api';
import { Hash } from '../helpers/hash';
import { CustomerError } from '../helpers/customer-error';

export class AuthController {
  constructor(private service: TruckService) {}

  login = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const parsed = truckSchemaLogin.parse(request.body);
      const truck = parsed as CreateTruckInput;
      const truckFind = await this.service.findByPseudo(truck.pseudo);

      if (truckFind && Hash.compare(truck.password, truckFind.password)) {
        const data = TruckTransformer.toUIone(truckFind);
        const access_token = AccessToken.sign(data);
        const refresh_token = RefreshToken.sign(data);
        return response.send(
          ResponseAPI.success({
            data: {
              ...data,
              access_token,
              refresh_token,
            },
          }),
        );
      }
      throw new CustomerError(400, 'Pseudo or Password incorrect');
    } catch (error) {
      next(error);
    }
  };

  logout = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const refreshToken = request.body?.refreshToken;
      if (!refreshToken) throw new CustomerError(400, 'Missing token');

      response.json(
        ResponseAPI.success({ data: {}, message: 'Logout successful' }),
      );
    } catch (error) {
      next(error);
    }
  };
}
