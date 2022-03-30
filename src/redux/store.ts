import { configureStore } from "@reduxjs/toolkit";
import promoCodeReducer from "./PromoCodeSlice";
import productReducer from "./ProductSlice";
import cartReducer from "./CartSlice";
import postReducer from "./PostSlice";
export function makeStore() {
  return configureStore({
    reducer: {
      promoCode: promoCodeReducer,
      product: productReducer,
      cart: cartReducer,
      post: postReducer,
    },
  });
}

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export default store;
