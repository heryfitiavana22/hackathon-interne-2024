import { Router } from 'express';
import { AlertService } from './alert.service';
import { AlertController } from './alert.controller';
import { prisma } from '../database/prisma';
import multer from 'multer';
const storage = multer.diskStorage({
  destination: 'public/images/alerts',
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({
  storage,
});

const router = Router();
const service = new AlertService(prisma);
const controller = new AlertController(service);

router.get('/alert/not-picked', controller.alertNotPicked);
router.get('/alert/:id', controller.findById);
router.post('/alert/', upload.single('imageFile'), controller.create);
router.put('/alert/:id', controller.updateById);
router.delete('/alert/:id', controller.deleteById);

export const alertRouter = router;
