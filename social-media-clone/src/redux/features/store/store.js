import { configureStore } from "@reduxjs/toolkit";
import SignInReducer from "../SignInSlice";
import SignUpReducer from "../SignUpSlice";
import LoadFeedReducer from "../FeedSlice";

export default configureStore({
  reducer: {
    SignIn: SignInReducer,
    SignUp: SignUpReducer,
    LoadFeed: LoadFeedReducer,
  },
});
