import { Title, Container, CheckoutForm } from "../../components";
import { useAppSelector } from "../../redux/hooks";
import { selectCart } from "../../redux/selectors";

const Checkout = () => {
  const { cart } = useAppSelector(selectCart);

  return (
    <Container>
      <Title tag="h2" style={{ textAlign: "center" }}>
        Checkout
      </Title>
      <CheckoutForm cart={cart} />
    </Container>
  );
};

export default Checkout;
