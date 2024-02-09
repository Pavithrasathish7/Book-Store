import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCard(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const exicitingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!exicitingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        exicitingItem.quantity++;
        exicitingItem.totalPrice = exicitingItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const exitingitem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (exitingitem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exitingitem.quantity--;
        //exitingitem.totalPrice = exitingitem.totalPrice - exitingitem.price;
      }
    },
  },
});

export const cartaction = cartslice.actions;

export default cartslice;
