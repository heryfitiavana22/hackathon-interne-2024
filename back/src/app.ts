import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { authRouter } from './auth/auth.routes';
import { verifyToken } from './auth/auth.middleware';
import { ZodError } from 'zod';
import { ResponseAPI } from './helpers/response.api';
import { CustomerError } from './helpers/customer-error';
import { truckRouter } from './truck/truck.routes';
import { alertRouter } from './alert/alert.routes';
import { paymentRouter } from './payment/payment.routes';
import { createServer } from 'http';
import { Server } from 'socket.io';

dotenv.config();

const PORT = 3000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
  },
});
const API_PREFIX = '/api/v1';

app.use(cors());
app.use('/static', express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'API working' });
});
app.use(API_PREFIX, authRouter);
app.use(API_PREFIX, paymentRouter);
app.use(verifyToken);
app.use(API_PREFIX, truckRouter);
app.use(API_PREFIX, alertRouter);
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

type TruckCoords = {
  pseudo: string;
  latitude: string;
  longitude: string;
};
let trucksCoords: TruckCoords[] = [];
io.on('connection', (socket) => {
  socket.on('new-truck', (truck: TruckCoords) => {
    socket.join('trucks-tracked');
    const t = trucksCoords.filter((el) => el.pseudo !== truck.pseudo);
    trucksCoords = t;
    trucksCoords.push(truck);
    console.log('trucks-tracked');

    io.emit('tracking', trucksCoords);
  });
  socket.on('truck-updated', (truck: TruckCoords) => {
    const index = trucksCoords.findIndex(
      (value) => value.pseudo == truck.pseudo,
    );
    if (!index) return;
    trucksCoords[index] = truck;
    io.in('truck-tracked').emit('tracking', trucksCoords);
  });
});

httpServer.listen(3000, () => {
  console.log(`Server running at port : ${PORT}`);
});
