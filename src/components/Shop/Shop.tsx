import React from 'react';
import { NavLink } from 'react-router-dom';

const Shop: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-cover animate-fade-in">
      <div className="flex flex-col gap-4">
        <NavLink to="https://kerrtisy.shop/" className="text-white bg-transparent border border-white rounded-full px-6 py-2 text-sm leading-6 uppercase text-center cursor-pointer transition-all duration-300 font-euclid font-light hover:bg-white hover:text-black">Shop</NavLink>
      </div>
    </main>
  );
};

export default Shop;