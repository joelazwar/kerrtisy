import React from 'react';
import './Home.css';

const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      {/* Centered Container */}
      <div className="button-container">
        {/* Example Buttons */}
        <button className="main-button">Recent Work</button>
        <button className="main-button">Shop</button>
        <button className="main-button">Contact</button>
      </div>
    </main>
  );
};

export default MainContent;