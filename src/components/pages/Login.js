import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#E0FECA' }}>
      <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '400px', borderRadius: '1rem' }}>
        <h3 className="text-center mb-4" style={{ color: '#004E64' }}>Log In</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn w-100" style={{ backgroundColor: '#25A18E', color: 'white' }}>
            Log In
          </button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/signup" style={{ color: '#E56E38' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
