import { isAnyOf, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllProducts, getAllCategories, getSingleProduct } from "./operations";
import { MainState, Product } from "../types/interfaces";

const handleSameFulfilled = (state: MainState) => {
  state.isLoading = false;
  state.error = null;
};

const initialState = {
  isLoading: false,
  error: null,
  data: {
    cart: [],
    product: null,
    products: [],
    categories: [],
    filteredProducts: [],
    filteredCategories: [],
  },
} as MainState;

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setFilteredProducts: (state, action: PayloadAction<Product[]>) => {
      state.data.filteredProducts = action.payload;
    },
    setFilteredCategories: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      const filters = state.data.filteredCategories;
      const newFilters = filters.filter((item) => item !== category);

      if (filters.includes(category)) {
        state.data.filteredCategories = newFilters;
      } else {
        state.data.filteredCategories.push(category);
      }
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const cart = state.data.cart;
      const { id, image, title, price } = action.payload;
      const newItem = { id, image, price, title, count: 1 };

      if (cart.length < 1) {
        state.data.cart.push(newItem);
        return;
      }
      const idx = cart.findIndex((item) => item.id === id);

      if (idx === -1) {
        state.data.cart.push(newItem);
      } else {
        state.data.cart[idx].count += 1;
      }
    },
    resetCategories: (state) => {
      state.data.filteredCategories = [];
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        handleSameFulfilled(state);
        state.data.products = action.payload;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        handleSameFulfilled(state);
        state.data.categories = action.payload;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        handleSameFulfilled(state);
        state.data.product = action.payload;
      })
      .addMatcher(
        isAnyOf(
          getAllProducts.pending,
          getAllCategories.pending,
          getSingleProduct.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllProducts.rejected,
          getAllCategories.rejected,
          getSingleProduct.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          if (typeof action.payload === "string") state.error = action.payload;
        }
      );
  },
});

export const {
  setFilteredProducts,
  setFilteredCategories,
  resetCategories,
  resetError,
  addToCart,
} = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
