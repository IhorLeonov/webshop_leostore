import { DetailedHTMLProps, HTMLAttributes } from "react";
import { NavLink } from "../index";
import { LinkList, IconWrapper } from "./NavLinkList.styled";
import { HiShoppingBag } from "react-icons/hi";
import { HiHome } from "react-icons/hi";

interface NavLinkListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {}

export const NavLinkList = ({ ...props }: NavLinkListProps) => {
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
          <NavLink to="/cart">
            <IconWrapper>
              <HiShoppingBag />
            </IconWrapper>
          </NavLink>
        </li>
      </LinkList>
    </nav>
  );
};
