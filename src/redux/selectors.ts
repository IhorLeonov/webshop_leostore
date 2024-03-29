import { RootState } from "./hooks";

export const selectData = (state: RootState) => state.main.data;
export const selectCart = (state: RootState) => state.cart;

export const selectError = (state: RootState) => state.main.error;
export const selectIsLoading = (state: RootState) => state.main.isLoading;
export const selectMessage = (state: RootState) => state.main.message;
export const selectPage = (state: RootState) => state.main.page;
export const selectNotFound = (state: RootState) => state.main.notFound;
