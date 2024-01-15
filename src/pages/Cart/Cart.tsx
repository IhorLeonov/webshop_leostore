import { useAppSelector } from "../../redux/hooks";
import { selectData } from "../../redux/selectors";
import { CardPage, Box, List, ListItem, Image, ItemInfo } from "./Cart.styled";

const Cart = () => {
  const { cart } = useAppSelector(selectData);
  let total = 0;

  return (
    <CardPage>
      <List>
        {cart.map(({ id, title, price, image, count }) => {
          total += price;
          return (
            <ListItem key={id}>
              <Image src={image} alt={title} />
              <ItemInfo>
                <p>
                  Name: <span>{title}</span>
                </p>
                <p>
                  Price: <span>{price} $</span>
                </p>
                <p>
                  Count: <span>{count}</span>
                </p>
                <button>+</button>
                <button>-</button>
                <button>Remove</button>
              </ItemInfo>
            </ListItem>
          );
        })}
      </List>

      <Box>
        <p>Total price: {total} $</p>
        <button>Make an order</button>
      </Box>
    </CardPage>
  );
};

export default Cart;
