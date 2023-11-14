import { createSlice } from "@reduxjs/toolkit";

const loginsignupSlice = createSlice({
  name: "loginsignup",
  initialState: {
    username: "",
    email: "",
    password: "",
  },
  reducers: {
    signup: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    update: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    login: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { signup, update, login } = loginsignupSlice.actions;

export default loginsignupSlice.reducer;
