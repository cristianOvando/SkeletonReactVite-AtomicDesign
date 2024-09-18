import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Landing from "../pages/Landing.jsx";

import ProtectRoute from "./ProtectRoute.jsx";
import Context from "../contexts/Context.js";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
