import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./Pages/Home"
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
