import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">KERRTISY</div>
      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>HOME</NavLink>
        <a href="#" className="nav-link">SHOP</a>
        <a href="#" className="nav-link">RECENT WORK</a>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>ABOUT</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>CONTACT</NavLink>
      </nav>
    </header>
  );
};

export default Header;