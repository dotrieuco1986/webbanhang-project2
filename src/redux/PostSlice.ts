import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiStatus } from "../constant/DataConstant";
import Post from "../models/Post";

interface PostState {
  posts: Post[];
  status: string;
}

const initialState: PostState = {
  posts: [],
  status: "loading",
};

export const fetchPost = createAsyncThunk("fetchPost", async () => {
  const response = await fetch("https://jsonblob.com/api/959020659581927424");
  const json = await response.json();
  return json;
});

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state, action) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = apiStatus.SUCCESS;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
      });
  },
});

export const { setPostSlice, addPostSlice } = postSlice.actions;
export default postSlice.reducer;
