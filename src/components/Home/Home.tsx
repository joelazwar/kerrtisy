import React from 'react';
import { NavLink } from 'react-router-dom';

const MainContent: React.FC = () => {

  const btn : string = "text-white bg-transparent border border-white rounded-full px-6 py-2 text-sm leading-6 uppercase text-center cursor-pointer transition-all duration-300 font-euclid font-light hover:bg-white hover:text-black";

  return (
    <main className="flex flex-col items-center justify-center bg-cover animate-fade-in">
      <div className="flex flex-col gap-4">
        <NavLink to="/recent-work" className={btn}>Recent Work</NavLink>
        <NavLink to="https://kerrtisy.shop/" className={btn}>Shop</NavLink>
        <NavLink to="/contact" className={btn}>Contact</NavLink>
      </div>
    </main>
  );
};

export default MainContent;