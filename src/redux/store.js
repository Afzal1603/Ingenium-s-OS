import { configureStore } from "@reduxjs/toolkit";
import windowSlice from "./slice/windowSlice";
export const store = configureStore({
  reducer: {
    window: windowSlice,
  },
});
