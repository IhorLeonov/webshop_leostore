import { DetailedHTMLProps, HTMLAttributes } from "react";
import { NavLink } from "../index";
import { LinkList, IconWrapper } from "./NavLinkList.styled";
import { HiShoppingBag } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { useLocation } from "react-router";

interface NavLinkListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {}

export const NavLinkList = ({ ...props }: NavLinkListProps) => {
  const location = useLocation();

  return (
    <nav>
      <LinkList {...props}>
        <li>
          <NavLink to="/">
            <IconWrapper>
              <HiHome />
            </IconWrapper>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" state={{ from: location }}>
            <IconWrapper>
              <HiShoppingBag />
            </IconWrapper>
          </NavLink>
        </li>
      </LinkList>
    </nav>
  );
};
