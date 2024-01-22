import { LinkProps } from "react-router-dom";
import { StyledLink } from "./NavLink.styled";

interface RouterLinkProps extends LinkProps {
  children: JSX.Element | string;
  to: string;
}

export const NavLink = ({ children, to, ...props }: RouterLinkProps) => {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};
