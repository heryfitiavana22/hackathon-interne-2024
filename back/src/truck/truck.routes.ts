import { Router } from 'express';
import { TruckService } from './truck.service';
import { TruckController } from './truck.controller';
import { prisma } from '../database/prisma';
import { Hash } from '../helpers/hash';

const router = Router();
const service = new TruckService(prisma);
const controller = new TruckController(service);

router.get('/truck/:id', controller.findById);
router.get('/me', controller.me);
router.post('/truck/', controller.create);
router.delete('/truck/:id', controller.deleteById);

async function createDefaultTruck() {
  try {
    const truck = await service.create({
      pseudo: 'herydj',
      password: Hash.make('0000'),
    });
  } catch (error) {}
}
createDefaultTruck();
export const truckRouter = router;
