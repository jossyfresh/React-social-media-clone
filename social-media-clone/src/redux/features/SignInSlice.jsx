import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    user: [],
    posts: [],
    following: [],
  },
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload.users;
    },
    signOut: (state, action) => {
      state.user = null;
    },
    setPost: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    setfollowing: (state, action) => {
      state.following = action.payload;
    },
  },
});

export const { signIn, signOut, setPost, setfollowing, addPost } =
  signInSlice.actions;
export const selectUser = (state) => state.uid;
export default signInSlice.reducer;
