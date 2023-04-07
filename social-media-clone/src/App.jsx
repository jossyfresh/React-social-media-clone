import React from "react";
import Navbar from "./Pages/Navbar";
import SignIn from "./Pages/SignInPage";
import SignUp from "./Pages/SignUpPage";
import UserWidget from "./component/UserWidget";
import MyPostWidget from "./component/CreatePost";
import ProfilePage from "./component/Profile";
import Friend from "./component/Friend";

const App = () => {
  const hello = "https://picsum.photos/200/300";
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default App;
