// TopBar.jsx
import React from "react";
import '../CSS/TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">Fakebook</div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default TopBar;
