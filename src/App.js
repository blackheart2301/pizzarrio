import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import { Routes, Route, Outlet } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Outlet/>
        <Footer />
    </div>
  );
}

export default App;