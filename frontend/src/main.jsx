import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/errorPage/ErrorPage.jsx";
import App from "./App.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import CartPage from "./pages/cartPage/CartPage.jsx";
import ProductListPage from "./pages/productListPage/ProductListPage.jsx";
import ProductPage from "./pages/productPage/ProductPage.jsx";


import SellerPage from "./pages/sellerPage/SellerPage.jsx";
import UserPage from "./pages/userPage/UserPage.jsx";
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },

      {
        path: ":category",
        element: <ProductListPage />,
      },

      {
        path: "product",
        children: [
          {
            path: ":productId",
            element: <ProductPage />,
          },
        ],
      },

      {
        path: "cart",
        element: <CartPage />,
      },

      {
        path: "user",
        children: [
          {
            path: "login",
            element: <Login />,
          },

          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },

      {
        path:"seller",
        children:[
          {
            path:"login",
            element:<Login></Login>
          },

          {
            path:"signup",
            element:<Signup></Signup>
          }
        ]
      },

      {
        path:"user",
        element:<UserPage/>
      },

      {
        path:"seller",
        element:<SellerPage/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
