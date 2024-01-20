import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { LayoutCmp } from "./Layout.styled";
import { Loader } from "../index";

export const Layout = () => {
  return (
    <LayoutCmp>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </LayoutCmp>
  );
};
