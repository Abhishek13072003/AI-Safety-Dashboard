// src/Navbar.tsx
import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">AI Safety Dashboard</div>
      <ul className="navbar-links">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Report</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
