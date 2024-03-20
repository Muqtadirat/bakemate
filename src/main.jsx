import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./index.css";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="bottom-right" toastOptions={{ duration: 3000 }}/>
      <RouterProvider router={router} />
  
  </React.StrictMode>
);
