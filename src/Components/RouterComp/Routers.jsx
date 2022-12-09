import { createBrowserRouter } from "react-router-dom";
import { productsAndCartLoader } from "../../Loaders/productsAndCartLoader";
import PrivateRoute from "../../routes/PrivateRoute";
import About from "../About/About";
import Inventory from "../Inventory/Inventory";
import Login from "../Login/Login";
import Orders from "../Orders/Orders";
import Shipping from "../Shipping/Shipping";
import Shop from "../Shop/Shop";
import SignUp from "../SignUp/SignUp";
import Main from "./Main";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader: () => fetch('products.json'),
        element: <Shop></Shop>,
      },
      {
        path: 'shop',
        loader: () => fetch('products.json'),
        element: <Shop></Shop>,
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: productsAndCartLoader,
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>,
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>,
      },
      {
        path: 'shipping',
        element: <PrivateRoute><Shipping></Shipping></PrivateRoute>,
      },

    ],
  },
])