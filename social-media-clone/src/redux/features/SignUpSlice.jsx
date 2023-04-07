import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  },
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,

  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },
  },
});

export const { signUp } = signUpSlice.actions;
export default signUpSlice.reducer;
