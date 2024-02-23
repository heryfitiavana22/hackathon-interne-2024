import { Router } from 'express';
import Stripe from 'stripe';
import { ResponseAPI } from '../helpers/response.api';
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

const router = Router();
router.post('/payment-intent/', async (request, response) => {
  console.log(request.body);

  try {
    const amount = Number(request.body.amount);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });
    return response.json(
      ResponseAPI.success({
        data: { clientSecret: paymentIntent.client_secret },
      }),
    );
  } catch (error) {
    return response
      .status(500)
      .json(ResponseAPI.error({ message: error.message }));
  }
});
export const paymentRouter = router;
