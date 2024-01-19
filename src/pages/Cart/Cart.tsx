import { useLocation, useNavigate } from "react-router-dom";
import { Button, Title, Container, NavLink, CartItemsList } from "../../components";
import { Box, Text } from "./Cart.styled";
import { useAppSelector } from "../../redux/hooks";
import { selectCart } from "../../redux/selectors";

const Cart = () => {
  const { cart } = useAppSelector(selectCart);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <Container>
      <NavLink to={backLinkHref} style={{ padding: 0, width: 100 }}>
        <Button option="back" />
      </NavLink>
      <Title tag="h2" style={{ textAlign: "center" }}>
        Shopping Cart
      </Title>
      <CartItemsList />
      <Box>
        <Text>Total price: {totalPrice.toFixed(2)} $</Text>
        <Button
          color="success"
          option="button"
          disabled={totalPrice === 0}
          onClick={() => navigate("/checkout")}
        >
          Make an order
        </Button>
      </Box>
    </Container>
  );
};

export default Cart;
