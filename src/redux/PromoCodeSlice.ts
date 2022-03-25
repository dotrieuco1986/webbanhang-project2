import { createSlice } from "@reduxjs/toolkit";

interface Code {
  code: string;
  value: number;
  type: string;
}

interface PromoCodeState {
  promoCode: Code[];
}

const initialState: PromoCodeState = {
  promoCode: [
    {
      code: "50do",
      value: 50,
      type: "money",
    },
    {
      code: "50p",
      value: 50,
      type: "percent",
    },
  ],
};

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
});

export const { addPromoCode, removePromoCode } = promoCodeSlice.actions;
export default promoCodeSlice.reducer;
