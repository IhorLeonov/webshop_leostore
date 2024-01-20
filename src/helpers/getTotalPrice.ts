import { CartItem } from "../types/interfaces";

export const getTotalPrice = (cart: CartItem[]) => {
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  return totalPrice.toFixed(2);
};
