import React from "react";
import ReactDOM from "react-dom/client";
import { useForm } from "react-hook-form";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <p>NOT FOUND 👻☠🐱‍🏍</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
