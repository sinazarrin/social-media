import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout";

const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));


const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: 'register',
        element: <Register />,
        
      }
    ],
  },
  
]);

const routers = () => {
  return <RouterProvider router={router} />
}

export default routers