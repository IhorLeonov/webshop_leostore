import { lazy } from "react";
import { Footer, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

const Main = lazy(() => import("./pages/Main/Main"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Order = lazy(() => import("./pages/Order/Order"));
const Product = lazy(() => import("./pages/Product/Product"));

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="cart" element={<Cart />} />
            <Route path="order" element={<Order />} />
            <Route path="product" element={<Product />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
