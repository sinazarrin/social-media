import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout";

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ]
    
  },
]);

const routers = () => {
  return <RouterProvider router={router}/>
}

export default routers