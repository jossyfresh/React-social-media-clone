import { configureStore } from "@reduxjs/toolkit";
import SignInReducer from "../SignInSlice";
import LoadFeedReducer from "../FeedSlice";

export default configureStore({
  reducer: {
    SignIn: SignInReducer,
    LoadFeed: LoadFeedReducer,
  },
});
