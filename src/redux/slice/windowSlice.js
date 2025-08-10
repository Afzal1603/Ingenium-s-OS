import { createSlice } from "@reduxjs/toolkit";

const cameraSlice = createSlice({
  name: "camera",
  initialState: false,
  reducers: {
    cameraToggle: (state, action) => {
      return !state;
    },
  },
});

export const { cameraToggle } = cameraSlice.actions;
export const cameraReducers = cameraSlice.reducer;
