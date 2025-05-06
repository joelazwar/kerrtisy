import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      <div className="button-container">
        <NavLink to="/recent-work" className="main-button">Recent Work</NavLink>
        <NavLink to="https://kerrtisy.shop/" className="main-button">Shop</NavLink>
        <NavLink to="/contact" className="main-button">Contact</NavLink>
      </div>
    </main>
  );
};

export default MainContent;