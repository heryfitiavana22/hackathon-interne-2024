import { Router } from 'express';
import Stripe from 'stripe';
import { ResponseAPI } from '../helpers/response.api';
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

const router = Router();
router.post('/payment/', (request, response) => {
  console.log(request.body);
  response.send(ResponseAPI.success({ data: null }));
});
export const paymentRouter = router;
