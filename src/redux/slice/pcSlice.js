import { createSlice } from "@reduxjs/toolkit";

const pcSlice = createSlice({
  name: "thispc",
  initialState: false,
  reducers: {
    pcToggle: (state, action) => {
      return !state;
    },
  },
});
const settingSlice = createSlice({
  name: "setting",
  initialState: false,
  reducers: {
    settingToggle: (state, action) => {
      return !state;
    },
  },
});
const gallerySlice = createSlice({
  name: "gallery",
  initialState: false,
  reducers: {
    galleryToggle: (state, action) => {
      return !state;
    },
  },
});
const browserSlice = createSlice({
  name: "browser",
  initialState: false,
  reducers: {
    browserToggle: (state, action) => {
      return !state;
    },
  },
});
const imageSlice = createSlice({
  name: "image",
  initialState: false,
  reducers: {
    imageToggle: (state, action) => {
      return !state;
    },
  },
});

const imagePathSlice = createSlice({
  name: "imagePath",
  initialState: "",
  reducers: {
    setImagePath: (state, action) => (state = action.payload),
  },
});

export const { setImagePath } = imagePathSlice.actions;
export const imagePathReducer = imagePathSlice.reducer;
export const { pcToggle } = pcSlice.actions;
export const pcReducers = pcSlice.reducer;

export const { settingToggle } = settingSlice.actions;
export const settingReducers = settingSlice.reducer;

export const { galleryToggle } = gallerySlice.actions;
export const galleryReducers = gallerySlice.reducer;

export const { browserToggle } = browserSlice.actions;
export const browserReducers = browserSlice.reducer;

export const { imageToggle } = imageSlice.actions;
export const imageReducers = imageSlice.reducer;
