import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./services/AuthContext";

import "./App.css";

import App from "./App";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Forbidden from "./pages/Forbidden";

import {
  getGuitars,
  getTypes,
  getModeles,
  getAutorization,
} from "./services/request";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const type = url.searchParams.get("type");
          console.info(type);
          const result = {
            types: await getTypes(),
            guitars: await getGuitars(type),
          };
          return result;
        },
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: async () => {
          const result = {
            isConnected: await getAutorization(),
            types: await getTypes(),
            modeles: await getModeles(),
          };
          return result;
        },
        errorElement: <Forbidden />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
