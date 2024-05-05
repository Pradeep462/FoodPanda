import { configureStore } from "@reduxjs/toolkit";
import cardScliceReduces from "./cardSlice";

const appStore = configureStore({
  reducer: {
    card: cardScliceReduces,
  },
});

export default appStore;
