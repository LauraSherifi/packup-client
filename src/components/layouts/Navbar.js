import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, Offcanvas, Button, Image } from 'react-bootstrap';
import ContactUs from '../pages/ContactUs';  // Import the ContactUs modal

const logo1 = '/img/logo1.png';

function MyNavbar() {
  const expand = 'lg';
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <Navbar expand={expand} className="bg-white shadow-sm py-2" sticky="top">
        <Container>
          {/* Logo and Brand */}
          <Navbar.Brand href="#" className="d-flex align-items-center me-5">
            <Image 
              src={logo1}
              alt="Logo" 
              width="60"
              height="60"
              className="d-inline-block align-top me-3"
              style={{
                borderRadius: '50%',
                border: '2px solid #f8f9fa',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <span 
              className="brand-title" 
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#2c3e50',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
              }}
            >
              PackUp
            </span>
          </Navbar.Brand>

          <Navbar.Toggle 
            aria-controls={`offcanvasNavbar-expand-${expand}`} 
            className="border-0"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className="border-0"
            style={{ width: '300px' }}
          >
            <Offcanvas.Header 
              closeButton 
              className="border-bottom bg-dark text-white"
              closeVariant="white"
            >
              <Offcanvas.Title 
                className="d-flex align-items-center"
                style={{ fontSize: '1.8rem', fontWeight: '600' }}
                >
                <Image 
                  src={logo1}
                  alt="PackUp Logo"
                  width="40"
                  height="40"
                  className="me-2"
                  style={{ borderRadius: '50%' }}
                />
                PackUp
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body 
              className="d-flex flex-column flex-lg-row p-4 p-lg-3" 
              style={{ backgroundColor: '#f8f9fa' }}
            >
              <Nav className="me-auto align-items-center">
                <Nav.Link
                  as={NavLink}
                  to="/HomePage"
                  end
                  className={({ isActive }) =>
                    `mx-2 px-3 py-2 fw-medium rounded hover-effect text-dark ${
                      isActive ? 'bg-dark text-white' : ''
                    }`
                  }
                >
                  <i className="bi bi-house-door me-2"></i>
                  Home
                </Nav.Link>

                <Nav.Link
                  as={NavLink}
                  to="/AboutUs"
                  className={({ isActive }) =>
                    `mx-2 px-3 py-2 fw-medium rounded hover-effect text-dark ${
                      isActive ? 'bg-dark text-white' : ''
                    }`
                  }
                >
                  <i className="bi bi-info-circle me-2"></i>
                  About Us
                </Nav.Link>

                {/* Trigger Modal for Contact Us */}
                <Nav.Link
                  onClick={() => setShowContactModal(true)} // Open the modal
                  className="mx-2 px-3 py-2 fw-medium rounded hover-effect text-dark"
                >
                  <i className="bi bi-envelope me-2"></i>
                  Contact Us
                </Nav.Link>
              </Nav>

              <div className="d-flex flex-row align-items-center mt-3 mt-lg-0 gap-2">
                <Button 
                  variant="outline-primary" 
                  className="px-4 py-2 fw-medium d-flex align-items-center"
                  style={{ 
                    borderWidth: '2px',
                    borderRadius: '50px',
                    transition: 'all 0.3s ease',
                    minWidth: '120px',
                    justifyContent: 'center'
                  }}
                >
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Login
                </Button>
                <Button 
                  variant="primary" 
                  className="px-4 py-2 fw-medium d-flex align-items-center"
                  style={{ 
                    borderRadius: '50px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    minWidth: '120px',
                    justifyContent: 'center'
                  }}
                >
                  <i className="bi bi-person-plus me-2"></i>
                  Sign Up
                </Button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Pass the modal state to the ContactUs component */}
      <ContactUs 
        show={showContactModal} 
        onHide={() => setShowContactModal(false)} // Close the modal
      />
    </>
  );
}

export default MyNavbar;
