import { Link, useLocation } from "react-router-dom";
import { Button, Title, Container, NavLink } from "../../components";
import { decreaseItemCount, increaseItemCount, removeItem } from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectCart } from "../../redux/selectors";
import {
  Box,
  List,
  ListItem,
  Image,
  ItemInfo,
  Count,
  Controls,
  Text,
} from "./Cart.styled";

const Cart = () => {
  const { cart } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  let total = 0;

  const handleIncrAmount = (id: number) => {
    dispatch(increaseItemCount({ id }));
  };

  const handleDecrAmount = (id: number) => {
    dispatch(decreaseItemCount({ id }));
  };

  const handleDeleteItem = (id: number) => {
    dispatch(removeItem({ id }));
  };

  return (
    <Container>
      <NavLink to={backLinkHref} style={{ padding: 0, width: 100 }}>
        <Button option="back" />
      </NavLink>
      <Title tag="h2" style={{ textAlign: "center" }}>
        Shopping Cart
      </Title>

      <List>
        {cart.map(({ id, title, price, image, count }) => {
          total += price * count;
          return (
            <ListItem key={id}>
              <Link to={`/product/${id}`} state={{ from: location }}>
                <Image src={image} alt={title} />
              </Link>
              <ItemInfo>
                <Text>{title}</Text>
                <p>{price} $</p>
                <Controls>
                  <Button
                    disabled={count === 1}
                    option="minus"
                    onClick={() => handleDecrAmount(id)}
                  />
                  <Count>{count}</Count>
                  <Button option="plus" onClick={() => handleIncrAmount(id)} />
                  <Button
                    option="button"
                    variant="text"
                    ariaLabel="delete"
                    color="error"
                    onClick={() => handleDeleteItem(id)}
                    sx={{ ml: "auto", mr: 1 }}
                  >
                    Delete
                  </Button>
                </Controls>
              </ItemInfo>
            </ListItem>
          );
        })}
      </List>

      <Box>
        <Text>Total price: {total.toFixed(2)} $</Text>
        <Button color="success" option="button">
          Make an order
        </Button>
      </Box>
    </Container>
  );
};

export default Cart;
