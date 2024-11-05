import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/HomePage.component.jsx";
import productCategories from "./page/product-categories";
import Header from "./components/Header";
import ShopPage from "./page/shop-page/shop-page.jsx";

const products = productCategories.sections;

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage productCategories={products} />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/shop/:title",
    element: <ShopPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Header />
    <RouterProvider router={router} />
  </StrictMode>
);
