import React from 'react';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Page Not Found</p>
      <p className="notfound-footer">Return to <a href="/" className="notfound-link">Home</a></p>
    </div>
  );
};

export default NotFound;