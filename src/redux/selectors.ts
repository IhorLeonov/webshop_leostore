import { RootState } from "./hooks";

export const selectData = (state: RootState) => state.main.data;
export const selectError = (state: RootState) => state.main.error;
export const selectMessage = (state: RootState) => state.main.message;
export const selectIsLoading = (state: RootState) => state.main.isLoading;
export const selectCart = (state: RootState) => state.cart;
