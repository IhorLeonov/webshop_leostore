import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./helpers/RestrictedRoute";
import { Layout } from "./layout/Layout";

const MainPage = lazy(() => import("./pages/Main/Main"));
const CartPage = lazy(() => import("./pages/Cart/Cart"));
const CheckoutPage = lazy(() => import("./pages/Checkout/Checkout"));
const ProductPage = lazy(() => import("./pages/Product/Product"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route
            path="checkout"
            element={<RestrictedRoute redirectTo="/" component={<CheckoutPage />} />}
          />
          <Route path="product/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
