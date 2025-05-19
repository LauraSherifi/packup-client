import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ContactUs = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="fw-bold">Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-fluid">
          <div className="row">
            {/* Left Column - Contact Info */}
            <div className="col-md-6 p-4">
              <div className="mb-4">
                <h5 className="fw-bold">CALL US</h5>
                <p>1 (234) 567-891, 1 (234) 987-654</p>
              </div>
              
              <div className="mb-4">
                <h5 className="fw-bold">LOCATION</h5>
                <p>121 Rock Street, 21 Avenue, New York, NY<br />92 (03) 9000</p>
              </div>
              
              <div className="mb-4">
                <h5 className="fw-bold">BUSINESS HOURS</h5>
                <p>Mon - Fri …… 10 am - 8 pm<br />Sat, Sun …… Closed</p>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="col-md-6 p-4 bg-light">
              <form>
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your Name" 
                    required
                  />
                </div>
                <div className="mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter a valid email address" 
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea 
                    className="form-control" 
                    rows="5" 
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100"
                  style={{ borderRadius: '50px' }}
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