import { useLocation, useNavigate } from "react-router-dom";
import { Button, Title, Container, OrderList } from "../../components";
import { Box, Text, EmptyCart, EmptyText } from "./Cart.styled";
import { useAppSelector } from "../../redux/hooks";
import { selectCart } from "../../redux/selectors";
import { getTotalPrice } from "../../helpers/getTotalPrice";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

const Cart = () => {
  const { cart } = useAppSelector(selectCart);
  const navigate = useNavigate();
  const location = useLocation();
  const totalPrice = getTotalPrice(cart);
  const backLinkHref = location.state?.from ?? "/";

  return (
    <Container>
      <Button option="back" path={backLinkHref} />

      {cart.length > 0 ? (
        <>
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
        </>
      ) : (
        <EmptyCart>
          <ProductionQuantityLimitsIcon sx={{ width: 180, height: 180 }} />

          <EmptyText>Cart is empty</EmptyText>
        </EmptyCart>
      )}
    </Container>
  );
};

export default Cart;
