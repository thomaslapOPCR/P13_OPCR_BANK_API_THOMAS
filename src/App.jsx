import React from "react";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "./Components/BaseLayout/BaseLayout.jsx";
import Home from "./Pages/Home/Home.jsx";
import SignInPage from "./Pages/SignInPage/SignInPage.jsx";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/Sign-in" element={<SignInPage/>} />
      </Route>
    </Routes>
  );
};

export default App;
