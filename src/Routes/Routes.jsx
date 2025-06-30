import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Products from "../components/Products";
import ProductDetails from "../pages/ProductDetails";
import DashBoard from "../pages/DashBoard";
import PurchaseCarts from "../components/PurchaseCarts";
import Statistics from "../components/Statistics";
import MyOffer from "../pages/MyOffer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/",
            element: <Products></Products>,
            loader: () => fetch("/products.json"),
          },
          {
            path: "/category/:category",
            element: <Products></Products>,
            loader: () => fetch("/products.json"),
          },
        ],
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/dashBoard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/myOffer",
        element: <MyOffer></MyOffer>,
      },
    ],
  },
]);

export { routes };
