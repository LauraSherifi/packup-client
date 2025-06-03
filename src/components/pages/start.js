import React from 'react';
import { Link } from 'react-router-dom';

function Start() {
  const backgroundBoxes = [
    { top: '10%', left: '5%', size: 170, img: '/img/img1.jpg' },
    { top: '30%', left: '80%', size: 160, img: '/img/img2.jpg' },
    { top: '60%', left: '10%', size: 170, img: '/img/img3.jpg' },
    { top: '80%', left: '70%', size: 140, img: '/img/img1.jpg' },
    { top: '20%', left: '50%', size: 150, img: '/img/img2.jpg' },
    { top: '75%', left: '30%', size: 190, img: '/img/img3.jpg' },
    { top: '45%', left: '60%', size: 210, img: '/img/img1.jpg' },
    { top: '15%', left: '25%', size: 109, img: '/img/img2.jpg' },
    { top: '65%', left: '85%', size: 130, img: '/img/img3.jpg' },
  ];

  return (
    <div className="position-relative min-vh-100 d-flex" style={{ backgroundColor: '#E0FECA' }}>
      
      {/* Background image boxes */}
      {backgroundBoxes.map((box, index) => (
        <div
          key={index}
          className="position-absolute rounded shadow"
          style={{
            width: `${box.size}px`,
            height: `${box.size}px`,
            top: box.top,
            left: box.left,
            backgroundImage: `url(${box.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.8,
            border: '5px solid #25A18E',
            zIndex: 0,
          }}
        />
      ))}

      <div className="container d-flex align-items-center justify-content-center z-1">
        <div className="row w-100">
          <div className="col-md-6 d-flex flex-column justify-content-center p-5 text-white">
            <h1 style={{ color: '#004E64' }}>Welcome to PackUp!</h1>
            <p style={{ fontSize: '1.2rem', color: '#004E64'}}>
              Plan group trips effortlessly. Choose your role, connect with trip planners or join as a user!
            </p>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-5">
            <div className="d-grid gap-3 w-75">
              <Link to="/login" className="btn btn-outline-light btn-lg" style={{ backgroundColor: '#25A18E', color: 'white' }}>
                Log In
              </Link>
              <Link to="/signup" className="btn btn-outline-light btn-lg" style={{ backgroundColor: '#E56E38', color: 'white' }}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
