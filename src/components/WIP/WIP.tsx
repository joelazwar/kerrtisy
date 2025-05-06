import React from 'react';
import './WIP.css';

const WorkInProgress: React.FC = () => {
  return (
    <div className="wip-container">
      <h1 className="wip-title">WORK IN PROGRESS</h1>
      <p className="wip-message">
        We're working hard to bring this page to life. Stay tuned!
      </p>
    </div>
  );
};

export default WorkInProgress;