import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import App from "./App";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Dashboard from "./pages/Dashboard";

import { getGuitars } from "./services/request";

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
        loader: getGuitars,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
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
