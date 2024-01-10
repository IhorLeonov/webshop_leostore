import {
  // PayloadAction,
  isAnyOf,
  createSlice,
} from "@reduxjs/toolkit";
import { getAllProducts } from "./operations";
import { MainState } from "../types/interfaces";

const handleSameFulfilled = (state: MainState) => {
  state.isLoading = false;
  state.error = null;
};

const initialState = {
  isLoading: false,
  error: null,
  data: {
    products: [],
  },
} as MainState;

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
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
      .addMatcher(
        isAnyOf(
          getAllProducts.pending
          // getFilteredChars.pending,
          // getLocations.pending,
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllProducts.rejected
          // getFilteredChars.rejected,
          // getLocations.rejected,
        ),
        (state, action) => {
          state.isLoading = false;
          if (typeof action.payload === "string") state.error = action.payload;
        }
      );
  },
});

export const { resetError } = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
