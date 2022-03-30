import { createSlice } from "@reduxjs/toolkit";
import Post from "../models/Post";

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [
    {
      id: 1,
      productName: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      product: "1",
      title: "hello",
      category: "men's clothing",
      content: "content of post ",
      tags: "",
    },
    {
      id: 2,
      productName:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet ",
      product: "5",
      title: "hello",
      category: "jewelry",
      content: "content of post ",
      tags: "",
    },
    {
      id: 3,
      productName: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      product: "9",
      title: "hello",
      category: "electronics",
      content: "content of post ",
      tags: "",
    },
    {
      id: 4,
      productName:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      product: "16",
      title: "hello",
      category: "women's clothing",
      content: "content of post ",
      tags: "",
    },
  ],
};

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    setPostSlice: (state, action) => {
      state.posts = action.payload;
    },
    addPostSlice: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const { setPostSlice, addPostSlice } = postSlice.actions;
export default postSlice.reducer;
