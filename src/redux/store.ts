import { mainReducer } from "./mainSlice";
import { cartReducer } from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    cart: cartReducer,
  },
});
