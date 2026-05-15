import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import blogReducer from "./blogSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    blogs: blogReducer,
  },
});