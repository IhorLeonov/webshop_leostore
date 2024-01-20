import { useNavigate } from "react-router";
import { Title, Container, CheckoutForm, OrderList, Button } from "../../components";
import { useAppSelector } from "../../redux/hooks";
import { selectCart } from "../../redux/selectors";
import { Text, Box } from "./Checkout.styled";
import { getTotalPrice } from "../../helpers/getTotalPrice";

const Checkout = () => {
  const { cart } = useAppSelector(selectCart);
  const navigate = useNavigate();
  const totalPrice = getTotalPrice(cart);

  return (
    <Container>
      <Title tag="h2" style={{ textAlign: "center", marginTop: 10 }}>
        Checkout
      </Title>
      <CheckoutForm cart={cart} />
      <Box>
        <Text>Order price - {totalPrice} $</Text>
        <Button option="button" variant="outlined" onClick={() => navigate("/cart")}>
          Change order
        </Button>
      </Box>
      <OrderList page="checkout" />
    </Container>
  );
};

export default Checkout;
