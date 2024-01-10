import { Link } from "react-router-dom";
import { Title } from "../index";
import { HeaderProps } from "./Header.props";
import { HeaderSection } from "./Header.styled";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <HeaderSection {...props}>
      <Link to="/">
        <Title tag="h1">LeoStore</Title>
      </Link>
      <Link to="/cart">
        <ShoppingCartOutlinedIcon fontSize="large" />
      </Link>
    </HeaderSection>
  );
};
