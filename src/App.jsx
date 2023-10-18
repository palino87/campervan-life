import './App.css';
import About from './About'
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './Home'


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <header>
          <Link className="site-logo" to="/">#VanLife</Link>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
