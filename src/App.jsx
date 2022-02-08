import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import LoginForm from "./LoginForm";
// import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter >
      {/* <Nav/> */}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="todolist" element={<Home />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="dashboard" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
