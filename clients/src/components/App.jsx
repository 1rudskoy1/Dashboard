import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./navbar/Navbar"
import Main from "../layout/Main";
import "./app.css"
function App() {
    return (
        <BrowserRouter>
          <div className="app">
              <Navbar />
              <Main/>
          </div>
        </BrowserRouter>
      );
}

export default App;