import { DetailedHTMLProps, HTMLAttributes } from "react";
import { LinkList, IconWrapper } from "./NavLinkList.styled";
import { HiShoppingBag } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { useLocation } from "react-router";
import { NavLink } from "../../UI";

interface NavLinkListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {}

export const NavLinkList = ({ ...props }: NavLinkListProps) => {
  const location = useLocation();

  return (
    <nav>
      <LinkList {...props}>
        <li>
          <NavLink to="/" aria-label="to home">
            <IconWrapper>
              <HiHome />
            </IconWrapper>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" aria-label="to cart" state={{ from: location }}>
            <IconWrapper>
              <HiShoppingBag />
            </IconWrapper>
          </NavLink>
        </li>
      </LinkList>
    </nav>
  );
};
