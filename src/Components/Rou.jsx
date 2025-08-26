import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import WardrobeDecoder from './Wardrobedecoder';

const Rou = () => {  // Changed from 'router' to 'Router'
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/warder" element={<WardrobeDecoder/>} />
        <Route path="/Login" element={<Login />} />
        {/* Add other routes here */}
      </Routes>
  );
};

export default Rou;  // Changed export to match