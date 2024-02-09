import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./ui-slice";
import cartslice from "./cart-slice";

const store = configureStore({
  reducer: { ui: UiSlice.reducer, cart: cartslice.reducer },
});

export default store;
