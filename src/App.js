import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import HomePage from './components/pages/HomePage';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/layouts/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
=======

function App() {
  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1>Welcome to PackUp</h1>
        <p className="lead">Plan, budget, and travel together</p>
      </header>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Create a Group</h5>
              <p className="card-text">Start your trip by creating a travel group.</p>
              <button className="btn btn-primary">Start</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Join a Group</h5>
              <p className="card-text">Join an existing group using a code or invitation.</p>
              <button className="btn btn-success">Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 //aa
//a
>>>>>>> e6726b3d5bc1671f371719a3d7fbce4be3df638d

export default App;
