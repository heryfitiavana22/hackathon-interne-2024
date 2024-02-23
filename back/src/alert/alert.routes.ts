import { Router } from 'express';
import { AlertService } from './alert.service';
import { AlertController } from './alert.controller';
import { prisma } from '../database/prisma';

const router = Router();
const service = new AlertService(prisma);
const controller = new AlertController(service);

router.get('/alert/not-picked', controller.alertNotPicked);
router.get('/alert/:id', controller.findById);
router.post('/alert/', controller.create);
router.put('/alert/:id', controller.updateById);
router.delete('/alert/:id', controller.deleteById);

export const alertRouter = router;
