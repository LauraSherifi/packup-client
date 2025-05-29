import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    city: '',
    role: 'user',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: form.fullName,  // your backend expects 'username'
          email: form.email,
          password: form.password,
          role: form.role,
          // phone and city are optional, send if your backend supports
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || 'Registration failed');
        return;
      }

      alert('Registration successful! Please log in.');
      navigate('/login');

    } catch (error) {
      console.error('Error during registration:', error);
      alert('Something went wrong, please try again.');
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{ backgroundColor: '#E0FECA' }}
    >
      <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '500px', borderRadius: '1rem' }}>
        <h3 className="text-center mb-4" style={{ color: '#004E64' }}>
          Create Account
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Your name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="form-control"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              className="form-control"
              placeholder="********"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="+383..."
            />
          </div>
          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              type="text"
              className="form-control"
            />
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
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#E56E38' }}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
