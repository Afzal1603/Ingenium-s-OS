import { createSlice } from "@reduxjs/toolkit";

const windowSlice = createSlice({
  name: "window",
  initialState: {
    val: false,
    count: 0,
  },
  reducers: {
    toggleWindow: (state, action) => {
      if (state.val === false && state.count == 0) {
        state.val = !state.val;
        state.count += 1;
        return state;
      } else if (state.val === true && state.count === 1) {
        state.count += 1;
        return state;
      } else if (state.val === true && state.count === 2) {
        state.val = !state.val;
        state.count = 0;
        return state;
      }
    },
  },
});

export const { toggleWindow } = windowSlice.actions;
export default windowSlice.reducer;
