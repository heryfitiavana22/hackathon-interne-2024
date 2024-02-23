import { createData } from '../helpers/repository';
import { PaymentIntent } from './payment.type';

export class PaymentService {
  static createPaymentIntent(amount: number) {
    return createData<PaymentIntent>('/payment-intent/', { amount });
  }
}
