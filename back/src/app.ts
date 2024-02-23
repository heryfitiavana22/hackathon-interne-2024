import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { authRouter } from './auth/auth.routes';
import { verifyToken } from './auth/auth.middleware';
import { userRouter } from './user/user.routes';
import { ZodError } from 'zod';
import { ResponseAPI } from './helpers/response.api';
import { CustomerError } from './helpers/customer-error';
import { Hash } from './helpers/hash';

dotenv.config();

const PORT = 3000;
const app = express();
const API_PREFIX = '/api/v1';

app.use(cors());
app.use('/static', express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'API working' });
});
app.use(API_PREFIX, authRouter);
app.use(verifyToken);
app.use(API_PREFIX, userRouter);
app.use((error: any, request: Request, response: Response, next: any) => {
  // console.log(error);
  if (error instanceof ZodError)
    return response
      .status(400)
      .send(ResponseAPI.error({ message: 'Property or query error' }));

  if (error instanceof CustomerError)
    return response
      .status(error.status)
      .send(ResponseAPI.error({ message: error.message }));

  response.status(400).send(ResponseAPI.error({ message: 'Error' }));
});

app.listen(PORT, () => {
  console.log(`Server running at port : ${PORT}`);
});
