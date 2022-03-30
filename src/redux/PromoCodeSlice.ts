import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiStatus } from "../constant/DataConstant";

interface Code {
  code: string;
  value: number;
  type: string;
}

interface PromoCodeState {
  promoCode: Code[];
  status: string;
}

const initialState: PromoCodeState = {
  promoCode: [],
  status: "loading",
};

export const fetchPromotion = createAsyncThunk("fetchPromotion", async () => {
  const response = await fetch("https://jsonblob.com/api/958639144742174720");
  const json = await response.json();
  return json;
});

const promoCodeSlice = createSlice({
  name: "promoCode",
  initialState,
  reducers: {
    addPromoCode: (state, action) => {
      state.promoCode.find((item) => action.payload.code === item.code) ??
        state.promoCode.push({
          code: action.payload.code,
          value: Number(action.payload.value),
          type: action.payload.type,
        });
    },
    removePromoCode: (state, action) => {
      state.promoCode = [
        ...state.promoCode.filter((code) => code.code !== action.payload),
      ];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPromotion.pending, (state, action) => {
        state.status = apiStatus.LOADING;
      })
      .addCase(fetchPromotion.fulfilled, (state, action) => {
        state.promoCode = action.payload;
        state.status = apiStatus.SUCCESS;
      })
      .addCase(fetchPromotion.rejected, (state, action) => {
        state.status = apiStatus.FAILED;
      });
  },
});

export const { addPromoCode, removePromoCode } = promoCodeSlice.actions;
export default promoCodeSlice.reducer;
