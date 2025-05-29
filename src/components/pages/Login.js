import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Trim and validate inputs
    const email = form.email.trim();
    const password = form.password;

    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok || !data.token) {
        setError(data.error || 'Invalid credentials.');
        setLoading(false);
        return;
      }

      // Correct this line to use `data.token`
      localStorage.setItem('token', data.token);
      navigate('/home', { replace: true });

    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{ backgroundColor: '#E0FECA' }}
    >
      <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '400px', borderRadius: '1rem' }}>
        <h3 className="text-center mb-4" style={{ color: '#004E64' }}>
          Log In
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <button
            type="submit"
            className="btn w-100"
            style={{ backgroundColor: '#25A18E', color: 'white' }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: '#E56E38' }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
