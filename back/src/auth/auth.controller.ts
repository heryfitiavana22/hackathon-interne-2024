import { NextFunction, Request, Response } from 'express';
import { UserService } from '../user/user.service';
import { userSchemaLogin } from '../user/validators/user.zod';
import { CreateUserInput } from '../user/interfaces/user.interface';
import { UserTransformer } from '../user/transformers/user.transformer';
import { AccessToken, RefreshToken } from './auth.sign';
import { ResponseAPI } from '../helpers/response.api';
import { Hash } from '../helpers/hash';
import { CustomerError } from '../helpers/customer-error';

export class AuthController {
  constructor(private service: UserService) {}

  login = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const parsed = userSchemaLogin.parse(request.body);
      const user = parsed as CreateUserInput;
      const userFind = await this.service.findByPseudo(user.pseudo);

      if (userFind && Hash.compare(user.password, userFind.password)) {
        const data = UserTransformer.toUIone(userFind);
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
