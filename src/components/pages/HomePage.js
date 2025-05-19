import React, { useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => {
  const [cards] = useState([
    { id: 1, title: 'Paris, France', text: 'The city of love and lights', img: '/img/img1.jpg' },
    { id: 2, title: 'Tokyo, Japan', text: 'Where tradition meets innovation', img: '/img/img2.jpg' },
    { id: 3, title: 'New York, USA', text: 'The city that never sleeps', img: '/img/img3.jpg' },
    { id: 4, title: 'Rome, Italy', text: 'Eternal city with ancient wonders', img: '/img/aa.png' },
    { id: 5, title: 'Sydney, Australia', text: 'Stunning harbor and iconic opera house', img: '/img/img1.jpg' },
    { id: 6, title: 'Cape Town, South Africa', text: 'Breathtaking landscapes and beaches', img: '/img/img2.jpg' },
  ]);

  return (
    <div className="home-page">
      {/* Main Carousel */}
      <div className="position-relative mx-4 mb-5">
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center z-2" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
          <h1 className="fw-bold display-4 mb-3">Welcome</h1>
          <p className="fs-4">Let's plan our next trip together</p>
        </div>
        <Carousel interval={6000} pause={false}>
          <Carousel.Item>
            <img className="d-block w-100" src="/img/slider1.jpg" alt="First slide" style={{ height: '60vh', objectFit: 'cover' }} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/img/slider2.jpg" alt="Second slide" style={{ height: '60vh', objectFit: 'cover' }} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/img/slider3.jpg" alt="Third slide" style={{ height: '60vh', objectFit: 'cover' }} />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Introduction Text */}
      <div className="text-center mb-4 px-3">
        <h2>Explore the World with Us</h2>
        <hr className="mx-auto" style={{ width: '80%', maxWidth: '850px' }} />
        <p className="lead">Travel opens your mind, expands your horizons, and connects you with the beauty of the world.</p>
      </div>

      {/* Responsive Card Grid */}
      <Container className="py-4">
        <h3 className="text-center mb-4">Our Destinations</h3>
        <Row>
          {cards.map(card => (
            <Col key={card.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={card.img}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover', transition: 'transform 0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </div>
                  <Button
                    className="mt-3"
                    style={{
                      backgroundColor: '#4a90e2',
                      border: 'none',
                      borderRadius: '20px',
                      padding: '8px 20px',
                      fontWeight: 500
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#3a7bc8'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#4a90e2'}
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
