import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cameraReducers } from "./slice/windowSlice";
import {
  pcReducers,
  settingReducers,
  galleryReducers,
  browserReducers,
  imageReducers,
  imagePathReducer,
} from "./slice/pcSlice";
import logOutSlice from "./slice/logOutSlice";
import wallSlice from "./slice/wallSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  camera: cameraReducers,
  logOut: logOutSlice,
  thispc: pcReducers,
  setting: settingReducers,
  wall: wallSlice,
  gallery: galleryReducers,
  browser: browserReducers,
  image: imageReducers,
  imagePath: imagePathReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore Redux Persist action types
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
