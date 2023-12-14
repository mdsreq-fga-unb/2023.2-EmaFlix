import React, { useState, useEffect } from 'react';
import './App.css';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from './components/pages/Navbar.jsx';
import NavbarMobile from './components/pages/NavbarMobile.jsx';
import { isAuthenticated } from '../../Backend_node/auth/isAuthenticated.jsx';

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
      {
        isAuthenticated() ? (
          <>
            {isDesktop ? <Navbar className="Navbar_Switch"/> : <NavbarMobile className="Navbar_Switch_Mobile"/>}
            <div className="container">
              <Outlet/>
            </div>
          </>
        ) : (
          <Navigate to="/login"/>
        )
      }
    </div>
  );
};

export default App;
