import React from 'react';
import Home from './home.js';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<h1>About</h1>}/>
      <Route path="/portfolio" element={<h1>Portfolio</h1>}/>
      <Route path="/contact" element={<h1>Contact</h1>}/>
      <Route path="/blog" element={<h1>Blog</h1>}/>
    </Routes>
  </BrowserRouter>
);