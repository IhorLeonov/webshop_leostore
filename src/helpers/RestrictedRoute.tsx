import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectCart } from "../redux/selectors";

interface RestrictedRouteProps {
  component: React.ReactNode;
  redirectTo: string;
}

export const RestrictedRoute = ({
  component: Component,
  redirectTo = "/",
}: RestrictedRouteProps) => {
  const { cart } = useAppSelector(selectCart);

  return cart.length < 1 ? <Navigate to={redirectTo} /> : Component;
};
