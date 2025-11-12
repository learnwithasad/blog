import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postsSilce.js";

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
