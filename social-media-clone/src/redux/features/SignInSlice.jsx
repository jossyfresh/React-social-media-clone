import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    user: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },
    signOut: (state, action) => {
      state.user = null;
    },
  },
});

export const { signIn, signOut } = signInSlice.actions;
export const selectUser = (state) => state.user;
export default signInSlice.reducer;
