import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-euclid text-base tracking-wide font-thin ${isActive
      ? 'text-gray-400'
      : ' text-white hover:text-gray-400 transition-colors duration-300'}`;

      const desktopNavClass = "hidden sm:flex xl:gap-24 lg:gap-16 md:gap-8 sm:gap-4";

      const mobileNavClass = `flex flex-col gap-4 bg-black text-white text-center absolute top-32 left-0 w-full ${
        isOpen ? 'px-0 py-4 max-h-96' : 'px-0 py-0 max-h-0'
      } transition-[max-height] transition-[padding] duration-300 ease-in-out overflow-hidden sm:hidden`;

  return (
    <header className="flex justify-between items-center px-8 sm:px-10 md:px-15 lg:px-20 py-12 bg-black">
      <div className="text-white text-lg font-bold tracking-widest font-eurostile">KERRTISY</div>
      {/* Hamburger Button */}
      <button
        className="sm:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      {/* Desktop Navbar */}
      <nav className={desktopNavClass}>
        <NavLink to="/" className={navLinkClass}>HOME</NavLink>
        <NavLink to="/shop" className={navLinkClass}>SHOP</NavLink>
        <NavLink to="/recent-work" className={navLinkClass}>RECENT WORK</NavLink>
        <NavLink to="/about" className={navLinkClass}>ABOUT</NavLink>
        <NavLink to="/contact" className={navLinkClass}>CONTACT</NavLink>
      </nav>
      {/* Mobile Navbar */}
      <nav className={mobileNavClass}>
        <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>HOME</NavLink>
        <NavLink to="/shop" className={navLinkClass} onClick={() => setIsOpen(false)}>SHOP</NavLink>
        <NavLink to="/recent-work" className={navLinkClass} onClick={() => setIsOpen(false)}>RECENT WORK</NavLink>
        <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>ABOUT</NavLink>
        <NavLink to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>CONTACT</NavLink>
      </nav>
    </header>
  );
};

export default Header;