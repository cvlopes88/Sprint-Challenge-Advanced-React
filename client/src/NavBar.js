import React, { useState } from 'react';
import UseDarkMode from './UseDarkMode';





const Navbar = () => {
    const [darkMode, setDarkMode] = UseDarkMode();
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
   
    
  
    
    return (
      <nav className="navbar">
        <h1>Top searches</h1>
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </nav>
    );
  };
  
  export default Navbar;