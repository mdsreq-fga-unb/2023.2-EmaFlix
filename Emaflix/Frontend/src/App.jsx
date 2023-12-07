import React, { useState, useEffect } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/pages/Navbar.jsx';
import NavbarMobile from './components/pages/NavbarMobile.jsx'; // Importe o componente NavbarMobile

function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 840);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 840);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="App">
      {isDesktop ? <Navbar className="Navbar_Switch"/> : <NavbarMobile className="Navbar_Switch_Mobile"/>}
      <div className="container">
        <Outlet/>
      </div>
    </div>
  );
};

export default App;
