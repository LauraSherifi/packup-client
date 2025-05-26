import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '', email: '', password: '', phone: '', city: '', role: 'user'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup:', form);
    navigate('/home');
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#E0FECA' }}>
      <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '500px', borderRadius: '1rem' }}>
        <h3 className="text-center mb-4" style={{ color: '#004E64' }}>Create Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input name="fullName" value={form.fullName} onChange={handleChange} type="text" className="form-control" placeholder="Your name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input name="email" value={form.email} onChange={handleChange} type="email" className="form-control" placeholder="you@example.com" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input name="password" value={form.password} onChange={handleChange} type="password" className="form-control" placeholder="********" />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} type="text" className="form-control" placeholder="+383..." />
          </div>
          <div className="mb-3">
            <label className="form-label">City</label>
            <input name="city" value={form.city} onChange={handleChange} type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Register as</label>
            <select name="role" value={form.role} onChange={handleChange} className="form-select">
              <option value="user">User</option>
              <option value="trip_planner">Trip Planner</option>
            </select>
          </div>
          <button type="submit" className="btn w-100" style={{ backgroundColor: '#25A18E', color: 'white' }}>
            Sign Up
          </button>
        </form>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/login" style={{ color: '#E56E38' }}>Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
