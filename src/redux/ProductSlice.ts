import { createSlice } from "@reduxjs/toolkit";
import Product from "../models/Product";

interface ProductState {
  products?: Product[];
  product?: Product;
}

const initialState: ProductState = {
  products: [],
  product: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    quantity: 0,
  },
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProductSlice: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProductSlice } = productSlice.actions;
export default productSlice.reducer;
