import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Recipe from "../pages/Recipe/Recipe";
import Login from "../pages/Login/Login";
import Chef from "../pages/Chef/Chef";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/recipe",
        element: (
          <PrivateRoute>
            <Recipe></Recipe>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <Chef></Chef>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://best-chef-today-server-rubaiyatrafi.vercel.app/chefs/${params.id}`
          ),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
