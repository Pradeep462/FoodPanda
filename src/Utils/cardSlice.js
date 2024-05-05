import { createSlice } from "@reduxjs/toolkit";

const cardSclice = createSlice({
  name: "card",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: state => {
      state.items.pop();
    },
    clearCard: state => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCard } = cardSclice.actions;

export default cardSclice.reducer;
