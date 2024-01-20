import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  Image,
  ItemInfo,
  Count,
  Controls,
  Text,
} from "./OrderList.styled";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectCart } from "../../redux/selectors";
import { increaseItemCount, decreaseItemCount, removeItem } from "../../redux/cartSlice";
import { setMessage } from "../../redux/mainSlice";
import { Button } from "..";

interface OrderListProps {
  page: "cart" | "checkout";
}

export const OrderList = ({ page }: OrderListProps) => {
  const { cart } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const handleIncrAmount = (id: number) => {
    dispatch(increaseItemCount({ id }));
  };

  const handleDecrAmount = (id: number) => {
    dispatch(decreaseItemCount({ id }));
  };

  const handleDeleteItem = (id: number) => {
    dispatch(removeItem({ id }));
    dispatch(setMessage("Item has been deleted"));
  };

  return (
    <List>
      {cart.map(({ id, title, price, image, count }) => {
        return (
          <ListItem key={id}>
            <Link to={`/product/${id}`} state={{ from: location }}>
              <Image src={image} alt={title} />
            </Link>

            <ItemInfo>
              <Text>{title}</Text>
              <p>{price.toFixed(2)} $</p>

              {page === "cart" && (
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
              )}
              {page === "checkout" && <p>{count} pcs</p>}
            </ItemInfo>
          </ListItem>
        );
      })}
    </List>
  );
};
