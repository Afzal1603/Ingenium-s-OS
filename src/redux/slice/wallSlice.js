import { createSlice } from "@reduxjs/toolkit";

const wallSlice = createSlice({
  name: "wall",
  initialState: "/wallpaper/wall-1.jpg",
  reducers: {
    changeWall: (state, action) => action.payload,
  },
});

export const { changeWall } = wallSlice.actions;
export default wallSlice.reducer;
