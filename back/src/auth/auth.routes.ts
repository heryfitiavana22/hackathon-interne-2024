import { Router } from 'express';
import { TruckService } from '../truck/truck.service';
import { AuthController } from './auth.controller';
import { prisma } from '../database/prisma';

const router = Router();
const service = new TruckService(prisma);
const controller = new AuthController(service);

router.post('/auth/login', controller.login);
router.post('/auth/logout', controller.logout);

export const authRouter = router;
