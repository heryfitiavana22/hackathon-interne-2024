import { Router } from 'express';
import { UserService } from './user.service';
import { UserController } from './user.controller';

const router = Router();
const service = new UserService();
const controller = new UserController(service);

router.get('/user/:id', controller.findById);
router.get('/me', controller.me);
router.put('/user/', controller.create);
router.delete('/user/:id', controller.deleteById);

export const userRouter = router;
