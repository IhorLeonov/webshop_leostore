import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { LayoutCmp } from "./Layout.styled";

export const Layout = () => {
  return (
    <LayoutCmp>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutCmp>
  );
};
