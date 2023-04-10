import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../app/store";
import { CartState } from "../types/features";

const initialState: CartState = {
  products: [],
  discount: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    search: () => {

    }
  }
})

export const { search } = cartSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;

export default cartSlice.reducer;