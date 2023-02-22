import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./navbar/Navbar"
import Main from "../layout/Main";
import Skills from "../layout/Skills";
import Auth from "../layout/Auth";
import Registr from "../layout/Registration";
import "./app.css"

function App() {
  return (
        <BrowserRouter>
          <div className="app">
              <Navbar />
              <Routes>
                  <Route path = "/" element = {<Main/>}></Route>
                  <Route path = "api/skills/all" element = {<Skills/>}></Route>
                  <Route path = "api/auth/auth" element = {<Auth/>}></Route>
                  <Route path = "api/auth/registration" element = {<Registr/>}></Route>
              </Routes>
          </div>
        </BrowserRouter>
      );
}

export default App;