import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './auth/login/login';
import { Home } from './home/home';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: 'login',
    element: <Login />,
  },
]);
export function RouterDom() {
  return <RouterProvider router={router} />;
}
