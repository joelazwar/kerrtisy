import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">KERRTISY</div>
      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>HOME</NavLink>
        <NavLink to="/shop" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>SHOP</NavLink>
        <NavLink to="/recent-work" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>RECENT WORK</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>ABOUT</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>CONTACT</NavLink>
      </nav>
    </header>
  );
};

export default Header;