import { createSlice } from "@reduxjs/toolkit";

const UiSlice = createSlice({
  name: "ui",
  initialState: { cartVisible: false },
  reducers: {
    toggle(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export const uiaction = UiSlice.actions;

export default UiSlice;
