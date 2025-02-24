import React from 'react';
import Skills from './components/functionalcomponents/Skills';
import About from './components/functionalcomponents/About';
import NavBar from './components/functionalcomponents/NavBar';
import Home from './components/functionalcomponents/Home';
import Contact from './components/functionalcomponents/Contact';
import Project from './components/functionalcomponents/Project';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <main style={{ 
      backgroundImage: "url('/bg.jpg')", 
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh", 
      width: "100vw" 
    }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
