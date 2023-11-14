import { configureStore } from "@reduxjs/toolkit";
import loginsignupReducer from "./loginsignupSlice";

export default configureStore({
  reducer: {
    loginsignup: loginsignupReducer,
  },
});
