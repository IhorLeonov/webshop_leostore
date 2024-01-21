import { isAnyOf, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getAllCategories,
  getSingleProduct,
  getProductsInCategory,
} from "./operations";
import { MainSliceState, Product } from "../types/interfaces";

const handleSameFulfilled = (state: MainSliceState) => {
  state.isLoading = false;
  state.error = null;
};

const initialState = {
  isLoading: false,
  notFound: false,
  error: null,
  message: null,
  page: 1,
  data: {
    product: null,
    products: [],
    categories: [],
    filteredProducts: [],
  },
} as MainSliceState;

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setFilteredProducts: (state, action: PayloadAction<Product[]>) => {
      state.data.filteredProducts = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    resetNotification: (state, action: PayloadAction<"error" | "message">) => {
      if (action.payload === "error") state.error = null;
      if (action.payload === "message") state.message = null;
    },
    setPage: (state, action: PayloadAction<number | undefined>) => {
      if (action.payload) {
        state.page = action.payload;
      } else state.page = state.page + 1;
    },
    setNotFound: (state, action: PayloadAction<boolean>) => {
      state.notFound = action.payload;
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
      .addCase(getProductsInCategory.fulfilled, (state, action) => {
        handleSameFulfilled(state);
        state.data.products = action.payload;
      })
      .addMatcher(
        isAnyOf(
          getAllProducts.pending,
          getAllCategories.pending,
          getSingleProduct.pending,
          getProductsInCategory.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllProducts.rejected,
          getAllCategories.rejected,
          getSingleProduct.rejected,
          getProductsInCategory.rejected
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
  setMessage,
  resetNotification,
  setPage,
  setNotFound,
} = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
