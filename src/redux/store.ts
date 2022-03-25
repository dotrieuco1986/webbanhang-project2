import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import promoCodeReducer from "./PromoCodeSlice";
import productReducer from "./ProductSlice";
import cartReducer from "./CartSlice";
export function makeStore() {
  return configureStore({
    reducer: {
      promoCode: promoCodeReducer,
      product: productReducer,
      cart: cartReducer,
    },
  });
}

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
