import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../app/store";
import { ProductsState } from "../types/features";

const initialState: ProductsState = {
  products: [],
  search: [],
  loading: false,
  error: '',
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    search: () => {

    }
  }
})

export const { search } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;
export const selectSearch = (state: RootState) => state.products.search;
export const selectLoading = (state: RootState) => state.products.loading;
export const selectError = (state: RootState) => state.products.error;

export default productsSlice.reducer;