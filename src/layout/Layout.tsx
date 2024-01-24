import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { LayoutCmp } from "./Layout.styled";
import { Footer, Header, Loader } from "../components/index";
import { useAppSelector } from "../redux/hooks";
import { selectIsLoading } from "../redux/selectors";
import { Notifications } from "../components/Notifictions/Notifications";

export const Layout = () => {
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <>
      <Header />
      <main>
        <LayoutCmp>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </LayoutCmp>
      </main>
      <Footer />
      <Notifications />
      {isLoading && <Loader />}
    </>
  );
};
