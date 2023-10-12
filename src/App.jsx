import React from "react";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "./Components/BaseLayout/BaseLayout.jsx";
import Home from "./Pages/Home/Home.jsx";
import SignInPage from "./Pages/SignInPage/SignInPage.jsx";
import UserPage from "./Pages/User/UserPage.jsx";
import Error from "./Pages/Error/Error.jsx";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/Sign-in" element={<SignInPage/>} />
        <Route path="/user" element={<UserPage/>} />
          <Route path="*" element={<Error/>} />
          <Route path="/error" element={<Error/>} />
      </Route>
    </Routes>
  );
};

export default App;
//http://localhost:3000/user/65019d1955749908f0b6776c
//http://localhost:3000/sign-in