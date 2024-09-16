import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import App from "./App";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import { getGuitars, getTypes, getModeles } from "./services/request";

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
            types: await getTypes(),
            modeles: await getModeles(),
          };
          return result;
        },
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
