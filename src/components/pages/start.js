// components/pages/Start.js
import React from 'react';
import { Link } from 'react-router-dom';

function start() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center mb-5">
        <h1 className="display-4 mb-3">Welcome to PackUp</h1>
        <p className="lead">Your ultimate traveling companion</p>
      </div>
      
      <div className="d-flex gap-4">
        <Link to="/HomePage" className="btn btn-primary btn-lg px-4 py-2">
          Get Started
        </Link>
        <Link to="/HomePage" className="btn btn-outline-primary btn-lg px-4 py-2">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default start;