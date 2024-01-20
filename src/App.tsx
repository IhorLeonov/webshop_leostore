import { lazy } from "react";
import { Footer, Header, Layout, Loader } from "./components";
import { Route, Routes } from "react-router-dom";
import { Notifications } from "./components/Notifictions/Notifications";
import { RestrictedRoute } from "./helpers/RestrictedRoute";
import { useAppSelector } from "./redux/hooks";
import { selectIsLoading } from "./redux/selectors";

const MainPage = lazy(() => import("./pages/Main/Main"));
const CartPage = lazy(() => import("./pages/Cart/Cart"));
const CheckoutPage = lazy(() => import("./pages/Checkout/Checkout"));
const ProductPage = lazy(() => import("./pages/Product/Product"));

const App = () => {
  const isLoading = useAppSelector(selectIsLoading);
  return (
    <>
      <Header />
      <main>
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
      </main>
      <Footer />
      <Notifications />
      {isLoading && <Loader />}
    </>
  );
};

export default App;
