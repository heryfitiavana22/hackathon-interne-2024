import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import { ResponseAPI } from '../helpers/response.api';
import { UserTransformer } from './transformers/user.transformer';
import { userSchemaAdd } from './validators/user.zod';
import { Hash } from '../helpers/hash';
import { AccessToken, RefreshToken } from '../auth/auth.sign';
import { CustomerError } from '../helpers/customer-error';
import { CreateUserInput } from './interfaces/user.interface';

export class UserController {
  constructor(private service: UserService) {}

  findById = async (
    request: Request<{ id: string }>,
    response: Response,
    next: NextFunction,
  ) => {
    try {
      const id = Number(request.params.id);
      if (isNaN(id)) throw new CustomerError(400, 'ID must be a number');
      const user = await this.service.findById(id);
      if (!user) throw new CustomerError(400, 'User not found');
      const data = UserTransformer.toUIone(user);
      response.send(ResponseAPI.success({ data }));
    } catch (error) {
      next(error);
    }
  };

  me = async (request: Request, response: Response) => {
    const token = request.headers['x-access-token'] as string;

    try {
      const user = AccessToken.verify(token);
      response.send(ResponseAPI.success({ data: user }));
    } catch (error) {
      response
        .status(403)
        .json(ResponseAPI.error({ message: 'Token invalide.' }));
    }
  };

  create = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const parsed = userSchemaAdd.parse(request.body);
      const user = parsed as CreateUserInput;
      const newUser = await this.service.create({
        ...user,
        password: Hash.make(user.password),
      });
      const data = UserTransformer.toUIone(newUser);
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

      const user = await this.service.deleteById(id);
      // const data = UserTransformer.toUIone(user);
      response.send(
        ResponseAPI.success({ data: null, message: 'Delete successful' }),
      );
    } catch (error) {
      next(error);
    }
  };
}
