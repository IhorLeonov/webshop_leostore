import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartSliceState, Product } from "../types/interfaces";

const initialState = {
  cart: [],
} as CartSliceState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const cart = state.cart;
      const { id, image, title, price } = action.payload;
      const newItem = { id, image, price, title, count: 1 };

      if (cart.length < 1) {
        state.cart.push(newItem);
        return;
      }
      const idx = cart.findIndex((item) => item.id === id);

      if (idx === -1) {
        state.cart.push(newItem);
      } else {
        state.cart[idx].count += 1;
      }
    },
    increaseItemCount: (state, action: PayloadAction<{ id: number }>) => {
      const idx = state.cart.findIndex((item) => item.id === action.payload.id);
      state.cart[idx].count += 1;
    },
    decreaseItemCount: (state, action: PayloadAction<{ id: number }>) => {
      const idx = state.cart.findIndex((item) => item.id === action.payload.id);
      if (state.cart[idx].count > 1) {
        state.cart[idx].count -= 1;
      }
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, increaseItemCount, decreaseItemCount, removeItem } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
