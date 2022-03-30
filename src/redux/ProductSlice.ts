import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Product from "../models/Product";
import { apiStatus } from "../constant/DataConstant";
interface ProductState {
  products?: Product[];
  product?: Product;
  status: string;
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
  status: "loading",
};

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  const response = await fetch("https://jsonblob.com/api/948153349182865408");
  const json = await response.json();
  return json;
});

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProductSlice: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = apiStatus.SUCCESS;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
      });
  },
});

export const { setProductSlice } = productSlice.actions;
export default productSlice.reducer;
