import { Title } from "../index";
import { HeaderProps } from "./Header.props";
import { HeaderSection, CartLink, LogoLink } from "./Header.styled";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <HeaderSection {...props}>
      <LogoLink to="/">
        <Title tag="h1">leostore.</Title>
      </LogoLink>
      <CartLink to="/cart">
        <span style={{ fontSize: 24, fontWeight: 500 }}>Buy</span>
        <ShoppingCartOutlinedIcon fontSize="large" />
      </CartLink>
    </HeaderSection>
  );
};
