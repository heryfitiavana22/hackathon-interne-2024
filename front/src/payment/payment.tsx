import './payement.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentForm } from './components/payment-form';
const stripePromise = loadStripe(
  'pk_test_51On1OMKb1JCfXHJbVLyirFb0fHcweO3RBCLFr6JhUblG8CWDXiJIqFauPXOcmipEfCWnrwQOxx4CPizJkCCUe9NT00a0wxnGOI',
);

export function Payment() {
  return (
    <Elements stripe={stripePromise}>
      <div className="payment">
        <div className="container">
          <div className="message">
            <h1>Faites partie du changement</h1>
            <img src="trash.png" alt="" className="trash-image" />
          </div>

          <PaymentForm />
        </div>
      </div>
    </Elements>
  );
}
