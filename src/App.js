import React from 'react';
import"./index.css";
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';
import Project from './routes/project';

function App() {
  return (
    <>
  {/* used to define all the routes for your application. */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
    </Routes>

    </>
  );
}

export default App;
 