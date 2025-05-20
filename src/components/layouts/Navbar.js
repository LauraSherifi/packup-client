import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, Button, Image } from 'react-bootstrap';
import ContactUs from '../pages/ContactUs';

const logo1 = '/img/logo1.png';

function MyNavbar() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <Navbar expand="md" className="shadow-sm py-2 sticky-top bg-primary" style={{ backgroundColor: '#fff!important' }}>      
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
          <Navbar.Toggle 
            aria-controls="main-navbar" 
            className="border-0"
          >
            <span 
              style={{
                display: 'block',
                width: '25px',
                height: '3px',
                backgroundColor: '#E0FECA',
                margin: '5px 0',
                transition: 'all 0.3s ease'
              }}
            />
            <span 
              style={{
                display: 'block',
                width: '25px',
                height: '3px',
                backgroundColor: '#E0FECA',
                margin: '5px 0',
                transition: 'all 0.3s ease'
              }}
            />
            <span 
              style={{
                display: 'block',
                width: '25px',
                height: '3px',
                backgroundColor: '#E0FECA',
                margin: '5px 0',
                transition: 'all 0.3s ease'
              }}
            />
          </Navbar.Toggle>

          {/* Collapsible Menu */}
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto align-items-center">
              <Nav.Link
                as={NavLink}
                to="/HomePage"
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

            {/* Right-aligned buttons */}
            <div className="d-flex flex-column flex-md-row align-items-center gap-2 my-2 my-md-0 ms-md-3">
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
              >
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Login
              </Button>
              <Button
                style={{
                  backgroundColor: '#F3B550',
                  color: '#004E64',
                  borderRadius: '50px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  minWidth: '120px',
                  justifyContent: 'center',
                  fontFamily: 'TAN-St-Canard, sans-serif',
                  fontWeight: 'bold',
                  border: 'none'
                }}
                className="px-3 px-md-4 py-2 d-flex align-items-center"
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#E56E38';
                  e.currentTarget.style.color = '#E0FECA';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#F3B550';
                  e.currentTarget.style.color = '#004E64';
                }}
              >
                <i className="bi bi-person-plus me-2"></i>
                Sign Up
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