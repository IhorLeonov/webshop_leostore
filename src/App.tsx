import { lazy } from "react";
import { Footer, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Notifications } from "./components/Notifications/Notifications";

const MainPage = lazy(() => import("./pages/Main/Main"));
const CartPage = lazy(() => import("./pages/Cart/Cart"));
const OrderPage = lazy(() => import("./pages/Order/Order"));
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
            <Route path="order" element={<OrderPage />} />
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
