import { Dispatch } from "redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getProductsRequest } from "../../api/productsService";

interface Product {
  id: string;
  name: string;
  price: string;
}
interface ProductsState {
  data: Product[];
}
const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
  } as ProductsState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.data = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export const doGetProductsRequest = () => async (dispatch: Dispatch) => {
  try {
    const response = await getProductsRequest();

    if (!response?.data) return;

    const { products } = response.data;
    dispatch(setProducts(products));

    return products;
  } catch (error) {
    throw error;
  }
};

export default productsSlice.reducer;
