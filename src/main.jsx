import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./index.css";
import { HomePage, ErrorPage, Login, SignUp, Dashboard } from "./pages";
import { Settings, Products, Orders } from "./components/dashboard";
import CreateUser from "./components/dashboard/settings/user-management/CreateUser";
import AddProduct from "./components/dashboard/products/AddProduct";
import AddOrder from "./components/dashboard/orders/AddOrder";
import Layout from "./layout";

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
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      // Settings
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "settings/createUser",
        element: <CreateUser />,
      },
      // Products
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/addProduct",
        element: <AddProduct />,
      },
      // Orders
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "orders/addOrder",
        element: <AddOrder />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>
);
