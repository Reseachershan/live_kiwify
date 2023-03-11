import React from "react";

import {
  Route,
  Routes,
} from "react-router-dom";

// components
import Login from "./pages/login";
import Signup from "./pages/signup";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={< Login />}></Route>
        <Route exact path='/signup' element={< Signup />}></Route>
      </Routes>
    </>
  )
}

export default Pages
