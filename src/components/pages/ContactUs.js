import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ContactUs = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton className="border-0" style={{ backgroundColor: '#004E64' }}>
        <Modal.Title className="fw-bold" style={{ color: '#fff' }}>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#E0FECA' }}>
        <div className="container-fluid">
          <div className="row">
            {/* Left Column - Contact Info */}
            <div className="col-md-6 p-4">
              <div className="mb-4">
                <h5 className="fw-bold" style={{ color: '#004E64' }}>CALL US</h5>
                <p className="text-muted">1 (234) 567-891, 1 (234) 987-654</p>
              </div>
              
              <div className="mb-4">
                <h5 className="fw-bold" style={{ color: '#004E64' }}>LOCATION</h5>
                <p className="text-muted">
                  121 Rock Street, 21 Avenue, New York, NY<br />92 (03) 9000
                </p>
              </div>
              
              <div className="mb-4">
                <h5 className="fw-bold" style={{ color: '#004E64' }}>BUSINESS HOURS</h5>
                <p className="text-muted">
                  Mon - Fri: 10 am - 8 pm<br />Sat, Sun: Closed
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="col-md-6 p-4" style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}>
              <form>
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your Name" 
                    required
                    style={{ borderColor: '#93C86D' }}
                  />
                </div>
                <div className="mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter a valid email address" 
                    required
                    style={{ borderColor: '#93C86D' }}
                  />
                </div>
                <div className="mb-3">
                  <textarea 
                    className="form-control" 
                    rows="5" 
                    placeholder="Enter your message"
                    required
                    style={{ borderColor: '#93C86D' }}
                  ></textarea>
                </div>
                <Button 
                  variant="success" 
                  type="submit" 
                  className="w-100"
                  style={{ 
                    borderRadius: '50px', 
                    backgroundColor: '#25A18E', 
                    borderColor: '#25A18E' 
                  }}
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactUs;
