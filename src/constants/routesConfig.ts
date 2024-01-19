import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage, Cart, Receipt } from "../pages";
import { Layout } from "../components";

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/receipt",
        Component: Receipt,
      },
    ],
  },
]);
