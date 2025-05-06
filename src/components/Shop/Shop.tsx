import React from 'react';
import './Shop.css';
import { NavLink } from 'react-router-dom';

const Shop: React.FC = () => {
  return (
    <main className="shop-content">
      <div className="button-container">
        <NavLink to="https://kerrtisy.shop/" className="main-button">Shop</NavLink>
      </div>
    </main>
  );
};

export default Shop;