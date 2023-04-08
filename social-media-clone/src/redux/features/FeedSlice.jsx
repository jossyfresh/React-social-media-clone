import { createSlice } from "@reduxjs/toolkit";

const FeedSlice = createSlice({
  name: "Feed",
  initialState: {
    posts: [],
  },
  reducers: {
    LoadFeed: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },
  },
});

export const { LoadFeed } = FeedSlice.actions;
export const selectUser = (state) => state.posts;
export default FeedSlice.reducer;
