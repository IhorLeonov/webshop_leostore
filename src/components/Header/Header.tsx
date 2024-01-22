import { DetailedHTMLProps, HTMLAttributes } from "react";
import { NavLinkList } from "../index";
import { HeaderSection, Link } from "./Header.styled";
import { Title } from "../../UI/Title/Title";

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <HeaderSection {...props}>
      <Link to="/" aria-label="to home">
        <Title tag="h1">leostore.</Title>
      </Link>
      <NavLinkList />
    </HeaderSection>
  );
};
