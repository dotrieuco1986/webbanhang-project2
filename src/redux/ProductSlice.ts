import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

export const fetchTodos = createAsyncThunk<ProductState[]>(
  "todos/fetchTodos",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    return json;
  }
);

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProductSlice: (state, action) => {
      state.products = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchTodos.pending, (state, action) => {
  //       state.status = "loading";
  //     })
  //     .addCase(fetchTodos.fulfilled, (state, action) => {
  //       action.payload.forEach(
  //         (todo) => {
  //           state.entities[todo.id] = todo;
  //           state.ids.push(todo.id);
  //         },
  //         { entities: {}, ids: [] } as {
  //           entities: Record<number, I_Todo>;
  //           ids: number[];
  //         }
  //       );
  //       state.status = "idle";
  //     });
  // },
});

export const { setProductSlice } = productSlice.actions;
export default productSlice.reducer;
