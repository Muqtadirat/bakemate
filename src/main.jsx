import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {  ErrorPage, Login, SignUp, Dashboard } from "./pages";
import { Settings, Products, Orders, Customers } from "./components/dashboard";
import CreateUser from "./components/dashboard/Settings/user-management/CreateUser";
import AddProduct from "./components/dashboard/products/AddProduct";
import AddOrder from "./components/dashboard/orders/AddOrder";
import CustomerDetails from "./components/dashboard/customers/CustomerDetails";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <HomePage />,
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
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
      // customers
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "customers/details",
        element: <CustomerDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider>
    <React.StrictMode>
      <Theme>
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
        <RouterProvider router={router} />
      </Theme>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
