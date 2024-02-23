import { useForm } from 'react-hook-form';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { PaymentService } from '../payment.service';
import { Loading } from '../../components/loading/loading';
import { toast } from 'sonner';
import { Toaster } from 'sonner';

export function PaymentForm({}: PaymentFormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ amount }: any) => {
    setLoading(true);
    const response = await PaymentService.createPaymentIntent(amount);
    if (response.status !== 200) return;
    const { paymentIntent, error } = await stripe.confirmCardPayment(
      response.data.clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      },
    );
    setLoading(false);
    if (paymentIntent) {
      toast.success('Payement fait avec succes');
    } else if (error) {
      toast.error('Echec du paiement');
    }
  };
  return (
    <>
      <div className="form-container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="title">
            <h2>Payer par carte</h2>
          </div>

          <div>
            <Input
              type="text"
              label="Montant:"
              className="input"
              placeholder="Ussd $:"
              {...register('amount', { required: true })}
            />
            {errors.montant && (
              <p className="alert ">Information obligatoire</p>
            )}
          </div>

          <CardElement options={{ style: {} }} />
          <Button className="button-payer" disabled={!stripe || loading}>
            Payer
          </Button>
        </form>
      </div>
      <Toaster />
      {loading && <Loading />}
    </>
  );
}

type PaymentFormProps = {};
