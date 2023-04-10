import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignIn from "./Pages/SignInPage";
import SignUp from "./Pages/SignUpPage";
import SetupProfile from "./Pages/SetupProfile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/setupProfile" element={<SetupProfile />} />
        <Route path="/Singup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
