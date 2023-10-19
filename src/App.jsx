import './App.css';
import About from './About'
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './Home'
import Vans from './Vans'
import VanDetail from './VanDetail'
import './server'


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <header>
          <Link className="site-logo" to="/">#VanLife</Link>
          <nav>
            <Link to="/vans">Vans</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetail />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
