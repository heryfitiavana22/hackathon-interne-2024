import { Router } from 'express';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';

const router = Router();
const service = new UserService();
const controller = new AuthController(service);

router.post('/auth/login', controller.login);
router.post('/auth/logout', controller.logout);

export const authRouter = router;
