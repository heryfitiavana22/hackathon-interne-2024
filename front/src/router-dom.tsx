import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './auth/login/login';
import { Home } from './home/home';
import { Payment } from './payment/payment';
import { ListAlert } from './alert/list-alert/list-alert';

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
]);
export function RouterDom() {
  return <RouterProvider router={router} />;
}
