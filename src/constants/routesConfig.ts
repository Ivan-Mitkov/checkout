import { createBrowserRouter } from "react-router-dom";
import { CartPage, ReceiptPage, ErrorPage } from "../pages";
import { Layout } from "../components";

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Layout,
    errorElement: ErrorPage(),
    children: [
      {
        index: true,
        Component: CartPage,
      },
      {
        path: "/cart",
        Component: CartPage,
      },
      {
        path: "/receipt",
        Component: ReceiptPage,
      },
    ],
  },
]);
