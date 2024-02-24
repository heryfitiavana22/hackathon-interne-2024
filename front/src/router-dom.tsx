import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './auth/login/login';
import { Home } from './home/home';
import { Payment } from './payment/payment';
import { ListAlert } from './alert/list-alert/list-alert';
import Tracking from './maps/tracking/tracking';
import ListeState from './alertState/list-state';
import FormAlert from './alert/form-alert/form-alert';
import Itinerary from './maps/itinerary/itinerary';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'payment',
    element: <Payment />,
  },
  {
    path: 'list',
    element: <ListAlert />,
  },
  {
    path: 'tracking',
    element: <Tracking />,
  },
  {
    path: 'itinerary/:lat/:long',
    element: <Itinerary />,
  },
  {
    path: 'liststate',
    element: <ListeState />,
  },
  {
    path: 'set-alert',
    element: <FormAlert />,
  },
]);
export function RouterDom() {
  return <RouterProvider router={router} />;
}
