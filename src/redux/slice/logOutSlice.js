import { createSlice } from "@reduxjs/toolkit";

const logOutSlice = createSlice({
  initialState: false,
  name: "logOut",
  reducers: {
    logToggle: (state, action) => {
      return !state;
    },
  },
});

export const { logToggle } = logOutSlice.actions;
export default logOutSlice.reducer;
