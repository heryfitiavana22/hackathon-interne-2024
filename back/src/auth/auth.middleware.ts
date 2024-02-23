import { NextFunction, Request, Response } from 'express';
import { ResponseAPI } from '../helpers/response.api';
import { AccessToken } from './auth.sign';

const AuthorizeWithoutAuth = ['insomnia', 'postman'];

export const verifyToken = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  //   const userAgent = request.headers['user-agent'];
  //   const referer = request.headers.referer || '';
  //   // console.log(userAgent);

  //   const isTools = AuthorizeWithoutAuth.find((value) =>
  //     userAgent.includes(value),
  //   );
  //   const isSwagger = referer.includes('api-docs');
  //   if (isTools || isSwagger) return next();

  const token = request.headers['x-access-token'] as string;

  if (!token)
    return response
      .status(400)
      .json(ResponseAPI.error({ message: 'Access denied, missing token' }));

  try {
    const user = AccessToken.verify(token);
    // request.user = user;
    next();
  } catch (error) {
    response.status(401).json(ResponseAPI.error({ message: 'Invalid token.' }));
  }
};
