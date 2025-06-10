import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fallbackImg = '/img/default-trip.jpg';

  useEffect(() => {
    const fetchTrips = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You must be logged in to view trips.');
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get('/api/trips', {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log(' Trips fetched:', res.data.trips);
        setTrips(res.data.trips || []);
      } catch (err) {
        console.error(' Error fetching trips:', err.response || err);
        setError('Failed to fetch trips. Please check your login or server.');
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="home-page" style={{ background: '#fff' }}>
      <div className="position-relative mx-4 mb-5">
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center z-2"
          style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
          <h1 className="fw-bold display-4 mb-3">Welcome</h1>
          <p className="fs-4">Let's plan our next trip together</p>
        </div>
        <Carousel interval={6000} pause={false}>
          {['slider1.jpg', 'slider2.jpg', 'slider3.jpg'].map((img, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={`/img/${img}`}
                alt={`Slide ${idx + 1}`}
                style={{ height: '60vh', objectFit: 'cover' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Intro */}
      <div className="text-center mb-4 px-3">
        <h2>Explore the World with Us</h2>
        <hr className="mx-auto" style={{ width: '80%', maxWidth: '850px' }} />
        <p className="lead">Travel opens your mind, expands your horizons, and connects you with the beauty of the world.</p>
      </div>

      {/* Trips */}
      <Container className="py-4">
        <h3 className="text-center mb-4">Our Destinations</h3>
        {loading && <p className="text-center">Loading trips...</p>}
        {error && <p className="text-danger text-center">{error}</p>}

        <Row>
          {!loading && !error && trips.length === 0 && (
            <p className="text-center">No trips found.</p>
          )}

          {trips.map((trip) => (
            <Col key={trip.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={trip.img || fallbackImg}
                    alt={trip.title}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover', transition: 'transform 0.3s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImg;
                    }}
                  />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>{trip.title}</Card.Title>
                    <Card.Text>{trip.description}</Card.Text>
                  </div>
                  <Button
                    className="mt-3"
                    style={{ backgroundColor: '#4a90e2', border: 'none', borderRadius: '20px', padding: '8px 20px' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#3a7bc8')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4a90e2')}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
