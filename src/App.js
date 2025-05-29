import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import HomePage from './components/pages/HomePage';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Start from './components/pages/start'; // note uppercase S for consistency
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';

function AppContent() {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const hideNavbarFooter = ['/', '/login', '/signup'].includes(location.pathname);

  // PrivateRoute component to protect routes
  const PrivateRoute = ({ element }) => {
    return token ? element : <Navigate to="/login" replace />;
  };

  // Redirect logged-in users away from login/signup
  const PublicRoute = ({ element }) => {
    return !token ? element : <Navigate to="/home" replace />;
  };

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Start />} />

        {/* Protected Home route */}
        <Route path="/home" element={<PrivateRoute element={<HomePage />} />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* Redirect logged-in users away from login/signup */}
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        <Route path="/signup" element={<PublicRoute element={<SignUp />} />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
