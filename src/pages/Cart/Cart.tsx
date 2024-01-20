import { useLocation, useNavigate } from "react-router-dom";
import { Button, Title, Container, OrderList } from "../../components";
import { Box, Text } from "./Cart.styled";
import { useAppSelector } from "../../redux/hooks";
import { selectCart } from "../../redux/selectors";
import { getTotalPrice } from "../../helpers/getTotalPrice";

const Cart = () => {
  const { cart } = useAppSelector(selectCart);
  const navigate = useNavigate();
  const location = useLocation();
  const totalPrice = getTotalPrice(cart);
  const backLinkHref = location.state?.from ?? "/";

  return (
    <Container>
      <Button option="back" path={backLinkHref} />
      <Title tag="h2" style={{ textAlign: "center", marginTop: 10 }}>
        Shopping Cart
      </Title>

      <OrderList page="cart" />
      <Box>
        <Text>Total price: {totalPrice} $</Text>
        <Button
          color="success"
          option="button"
          disabled={Number(totalPrice) === 0}
          onClick={() => navigate("/checkout")}
        >
          Make an order
        </Button>
      </Box>
    </Container>
  );
};

export default Cart;
