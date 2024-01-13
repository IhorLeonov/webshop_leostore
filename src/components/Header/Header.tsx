import { DetailedHTMLProps, HTMLAttributes } from "react";
import { NavLinkList, Title } from "../index";
import { HeaderSection, Link } from "./Header.styled";

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <HeaderSection {...props}>
      <Link to="/">
        <Title tag="h1">leostore.</Title>
      </Link>
      <NavLinkList />
    </HeaderSection>
  );
};
