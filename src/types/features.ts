import { Product } from "./products";

export interface ProductsState {
  products: Product[],
  search: Product[],
  loading: boolean,
  error: string,
}

export interface CartState {
  products: Product[],
  discount: number,
}

export interface UserState {
  currentUser: string,
}