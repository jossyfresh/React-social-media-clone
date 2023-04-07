import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    password: "",
  },
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },
  },
});

export const { signIn } = signInSlice.actions;
export default signInSlice.reducer;
