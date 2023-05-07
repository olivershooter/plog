import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/app/App";

import Root from "../src/routes/root";
import ErrorPage from "./app/components/ErrorPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
