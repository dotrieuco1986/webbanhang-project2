import { createSlice } from "@reduxjs/toolkit";
import Product from "../models/Product";

interface ProductState {
  products: Product[];
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

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCartSlice: (state, action) => {
      const addCarts = state.products ?? [];
      let index = addCarts.findIndex((cart) => cart.id === action.payload.id);
      index === -1
        ? addCarts.push({ ...action.payload, quantity: 1 })
        : addCarts[index].quantity++;

      state.products = addCarts;
    },
    removeCartSlide: (state, action) => {
      const data = state.products;
      data.forEach((item, index) => {
        if (item.id === action.payload.id) {
          data.splice(index, 1);
        }
      });
    },
    changeQuantityCartSlice: (state, action) => {
      const data = state.products;
      data.forEach((item) => {
        if (item.id === action.payload.id) {
          item.quantity = action.payload.quantity;
        }
      });
    },
  },
});

export const { addCartSlice, removeCartSlide, changeQuantityCartSlice } =
  cartSlice.actions;
export default cartSlice.reducer;
