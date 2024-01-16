import { isAnyOf, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllProducts, getAllCategories, getSingleProduct } from "./operations";
import { MainSliceState, Product } from "../types/interfaces";

const handleSameFulfilled = (state: MainSliceState) => {
  state.isLoading = false;
  state.error = null;
};

const initialState = {
  isLoading: false,
  error: null,
  message: null,
  data: {
    product: null,
    products: [],
    categories: [],
    filteredProducts: [],
    filteredCategories: [],
  },
} as MainSliceState;

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
    resetCategories: (state) => {
      state.data.filteredCategories = [];
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    resetNotification: (state, action: PayloadAction<string>) => {
      if (action.payload === "error") state.error = null;
      if (action.payload === "message") state.message = null;
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
  setMessage,
  resetNotification,
} = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
