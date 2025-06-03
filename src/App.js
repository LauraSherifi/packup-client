import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import HomePage from './components/pages/HomePage';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Start from './components/pages/start'; // Ensure 'Start' is capitalized
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';

function AppContent() {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role'); // ✅ Grab the role

  const hideNavbarFooter = ['/', '/login', '/signup'].includes(location.pathname);

  // ✅ Route protection based on login
  const PrivateRoute = ({ element }) => {
    return token ? element : <Navigate to="/login" replace />;
  };

  // ✅ Prevent logged-in users from seeing login/signup
  const PublicRoute = ({ element }) => {
    return !token ? element : <Navigate to="/home" replace />;
  };

  // ✅ Role-based route: Admin
  const AdminRoute = ({ element }) => {
    return token && userRole === "admin" ? element : <Navigate to="/login" replace />;
  };

  // ✅ Role-based route: Planner
  const PlannerRoute = ({ element }) => {
    return token && userRole === "planner" ? element : <Navigate to="/login" replace />;
  };

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<PrivateRoute element={<HomePage />} />} />
        <Route path="/aboutus" element={<PrivateRoute element={<AboutUs />} />} />
        <Route path="/contactus" element={<PrivateRoute element={<ContactUs />} />} />
{/* 
        ✅ Role-specific dashboards
        <Route path="/planner" element={<PlannerRoute element={<PlannerDashboard />} />} />
        <Route path="/admin" element={<AdminRoute element={<AdminDashboard />} />} /> */}

        {/* Public routes */}
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
