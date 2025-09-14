import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>Welcome to the CRM</h1>
      <p>Manage your customers and leads efficiently.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link to="/login">
          <button className="btn">Log In</button>
        </Link>
        <Link to="/register">
          <button className="btn">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;