import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from 'layouts/Home';
import { Login } from 'layouts/Login';
import { NotFound } from 'layouts/NotFound';
import { FallbackElement } from 'layouts/FallbackElement';
import { Navbar } from 'components/NavBar';
import { Logout } from 'layouts/Logout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/logout',
        element: <Logout />,
      },
    ],
  },

]);

export function CustomRoutes() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<FallbackElement />}
    />
  );
}

export default CustomRoutes;
