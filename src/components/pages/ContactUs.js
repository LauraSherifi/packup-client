import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ContactUs = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setStatus('error');
    }
  };

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
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter your Name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ borderColor: '#93C86D' }}
                  />
                </div>
                <div className="mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter a valid email address" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ borderColor: '#93C86D' }}
                  />
                </div>
                <div className="mb-3">
                  <textarea 
                    className="form-control" 
                    rows="5" 
                    placeholder="Enter your message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                {status === 'loading' && <p className="text-center mt-2">Sending...</p>}
                {status === 'success' && <p className="text-success text-center mt-2">Message sent successfully!</p>}
                {status === 'error' && <p className="text-danger text-center mt-2">Failed to send message. Try again.</p>}
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactUs;