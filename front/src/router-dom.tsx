import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './auth/login/login';
import { Home } from './home/home';
import {ListAlert} from './alert/list-alert/list-alert'


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: 'login',
    element: <Login />,
    
  },
  {
    path: 'list',
    element : <ListAlert/> 
  }
  
]);
export function RouterDom() {
  return <RouterProvider router={router} />;
}
