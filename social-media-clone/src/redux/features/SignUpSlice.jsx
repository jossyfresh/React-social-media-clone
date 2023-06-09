import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isFetching: false,
  isSuccess: false,
  isError: false,
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
