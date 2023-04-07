import { configureStore } from "@reduxjs/toolkit";
import SignInReducer from "../SignInSlice";
import SignUpReducer from "../SignUpSlice";

export default configureStore({
  reducer: {
    SignIn: SignInReducer,
    SignUp: SignUpReducer,
  },
});
