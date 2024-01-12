import axios from "axios";
import type { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const getAllProducts = createAsyncThunk(
  "main/getAllProducts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/products");
      return res.data;
    } catch (err) {
      const error = err as AxiosError<string>;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllCategories = createAsyncThunk(
  "main/getAllCategories",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/products/categories");
      return res.data;
    } catch (err) {
      const error = err as AxiosError<string>;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
