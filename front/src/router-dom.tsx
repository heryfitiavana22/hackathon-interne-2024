import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './auth/login/login';
import { Home } from './home/home';
import { Payment } from './payment/payment';

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
]);
export function RouterDom() {
  return <RouterProvider router={router} />;
}
