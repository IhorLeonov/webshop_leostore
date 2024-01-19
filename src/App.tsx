import { lazy } from "react";
import { Footer, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Notifications } from "./components/Notifictions/Notifications";
// import { RestrictedRoute } from "./helpers/RestrictedRoute";

const MainPage = lazy(() => import("./pages/Main/Main"));
const CartPage = lazy(() => import("./pages/Cart/Cart"));
const CheckoutPage = lazy(() => import("./pages/Checkout/Checkout"));
const ProductPage = lazy(() => import("./pages/Product/Product"));

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="cart" element={<CartPage />} />
            {/* <Route
              path="checkout"
              element={<RestrictedRoute redirectTo="/" component={<CheckoutPage />} />}
            /> */}
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </main>
      <Footer />
      <Notifications />
    </>
  );
};

export default App;
