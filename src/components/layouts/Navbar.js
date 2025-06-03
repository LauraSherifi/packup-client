import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, Button, Image } from 'react-bootstrap';
import ContactUs from '../pages/ContactUs';

const logo1 = '/img/logo1.png';

function MyNavbar() {
  const [showContactModal, setShowContactModal] = useState(false);
  const navigate = useNavigate();

  const username = localStorage.getItem('username');
  const role = localStorage.getItem('role');

const handleLogout = () => {
  const confirmed = window.confirm('Are you sure you want to log out?');
  if (confirmed) {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    
    navigate('/login', { replace: true });

    window.location.reload();
  }
};

  return (
    <>
      <Navbar expand="md" className="shadow-sm py-2 sticky-top" style={{ backgroundColor: 'rgb(0, 78, 100)' }}>
        <Container fluid="lg">
          {/* Logo */}
          <Navbar.Brand href="#" className="d-flex align-items-center me-md-5">
            <Image
              src={logo1}
              alt="Logo"
              width="60"
              height="60"
              className="d-inline-block align-top me-3"
              style={{
                borderRadius: '50%',
                border: '2px solid #E0FECA',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <span
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#E0FECA',
                fontFamily: 'TAN-St-Canard, sans-serif'
              }}
            >
              PackUp
            </span>
          </Navbar.Brand>

          {/* Hamburger Toggle Button */}
          <Navbar.Toggle aria-controls="main-navbar" className="border-0">
            <span style={{ display: 'block', width: '25px', height: '3px', backgroundColor: '#E0FECA', margin: '5px 0', transition: 'all 0.3s ease' }} />
            <span style={{ display: 'block', width: '25px', height: '3px', backgroundColor: '#E0FECA', margin: '5px 0', transition: 'all 0.3s ease' }} />
            <span style={{ display: 'block', width: '25px', height: '3px', backgroundColor: '#E0FECA', margin: '5px 0', transition: 'all 0.3s ease' }} />
          </Navbar.Toggle>

          {/* Collapsible Menu */}
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto align-items-center">
              <Nav.Link
                as={NavLink}
                to="/home"
                end
                className={({ isActive }) =>
                  `mx-1 mx-md-2 px-3 py-2 rounded hover-effect ${
                    isActive ? 'bg-E56E38 text-white' : 'text-E0FECA'
                  }`
                }
                style={({ isActive }) => ({
                  fontFamily: 'TAN-St-Canard, sans-serif',
                  fontWeight: 'bold',
                  backgroundColor: isActive ? '#E56E38' : 'transparent',
                  color: isActive ? '#004E64' : '#E0FECA',
                  borderRadius: '20px',
                  transition: 'all 0.3s'
                })}
              >
                <i className="bi bi-house-door me-2"></i>
                Home
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/AboutUs"
                className={({ isActive }) =>
                  `mx-1 mx-md-2 px-3 py-2 rounded hover-effect ${
                    isActive ? 'bg-E56E38 text-white' : 'text-E0FECA'
                  }`
                }
                style={({ isActive }) => ({
                  fontFamily: 'TAN-St-Canard, sans-serif',
                  fontWeight: 'bold',
                  backgroundColor: isActive ? '#E56E38' : 'transparent',
                  color: isActive ? '#004E64' : '#E0FECA',
                  borderRadius: '20px',
                  transition: 'all 0.3s'
                })}
              >
                <i className="bi bi-info-circle me-2"></i>
                About Us
              </Nav.Link>

              <Nav.Link
                onClick={() => setShowContactModal(true)}
                className="mx-1 mx-md-2 px-3 py-2 rounded hover-effect text-E0FECA"
                style={{
                  fontFamily: 'TAN-St-Canard, sans-serif',
                  fontWeight: 'bold',
                  color: '#E0FECA',
                  borderRadius: '20px',
                  transition: 'all 0.3s'
                }}
              >
                <i className="bi bi-envelope me-2"></i>
                Contact Us
              </Nav.Link>
            </Nav>

            {/* Right-aligned buttons and user greeting */}
            <div className="d-flex flex-column flex-md-row align-items-center gap-2 my-2 my-md-0 ms-md-3">
              {username && (
                <span style={{
                  color: '#E0FECA',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  marginRight: '1rem',
                  fontFamily: 'TAN-St-Canard, sans-serif',
                  whiteSpace: 'nowrap'
                }}>
                  Hi, <br/> {username} <br/> Registered as: {role}
                </span>
              )}
              <Button
                variant="outline-light"
                className="px-3 px-md-4 py-2 d-flex align-items-center"
                style={{
                  borderWidth: '2px',
                  borderRadius: '50px',
                  transition: 'all 0.3s ease',
                  minWidth: '120px',
                  justifyContent: 'center',
                  fontFamily: 'TAN-St-Canard, sans-serif',
                  fontWeight: 'bold',
                  color: '#E0FECA'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#25A18E';
                  e.currentTarget.style.color = '#004E64';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#E0FECA';
                }}
                onClick={handleLogout}
              >
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Log Out
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contact Modal */}
      <ContactUs
        show={showContactModal}
        onHide={() => setShowContactModal(false)}
      />
    </>
  );
}

export default MyNavbar;
