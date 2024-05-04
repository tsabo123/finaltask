import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Detail from "./Detail";



 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />}/>
        <Route index path="/Signup" element={<Signup />}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/Detail/:id" element={<Detail />} />
          
        
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);