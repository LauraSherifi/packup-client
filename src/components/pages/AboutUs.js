import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
const slider2 = '/img/slider2.jpg';

function AboutUs() {
  const contentSections = [
    {
      title: "About Us",
      description: "Welcome to PackUp – your smart companion for effortless group travel planning. We know how chaotic it can be to organize trips with friends, family, or colleagues – juggling group chats, spreadsheets, and endless back-and-forth messages. That’s why we built PackUp: a streamlined, all-in-one web platform that takes the stress out of organizing group adventures. Whether you're planning a weekend getaway or an international tour, PackUp helps you coordinate, create, and customize your journey with ease.",
      icon: "bi bi-people-fill"
    },
    {
      title: "Our Mission",
      description: "Our mission is to make group travel fun, collaborative, and totally hassle-free. We empower trip planners and travelers alike with tools that simplify decision-making, trip tracking, and communication. From managing itineraries and assigning roles to voting on destinations and sharing updates, PackUp ensures everyone stays on the same page – literally. We aim to turn the chaos of planning into the joy of anticipation.",
      icon: "bi bi-bullseye"
    },
    {
      title: "Our Values",
      description: "At PackUp, we value simplicity, connection, and inclusivity. We believe travel should bring people together, not pull them apart with logistics and stress. We design with users in mind, prioritize transparency, and build features that help teams of all types collaborate. Whether you're the planner or just along for the ride, everyone’s voice matters. With PackUp, your trip isn’t just better organized – it’s more meaningful from the very start.",
      icon: "bi bi-heart-fill"
    }
  ];

  return (
    <Container fluid className="px-0 overflow-hidden" style={{ backgroundColor: '#E0FECA' }}>
      <Row className="g-0 min-vh-100">
        {/* Hero Image Section */}
        <Col lg={6} className="position-relative">
          <Image 
            src={slider2}
            alt="Community members together"
            fluid
            className="w-100 h-100 object-fit-cover"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-25">
            <div className="text-center px-3">
              <h1 className="display-3 fw-bold mb-4 text-white">Our Community</h1>
              <p className="lead d-none d-md-block text-white text-opacity-75">
                Building connections that last a lifetime
              </p>
            </div>
          </div>
        </Col>

        {/* Content Section */}
        <Col lg={6} className="d-flex align-items-center py-5" style={{ backgroundColor: '#fff' }}>
          <Container className="py-lg-5">
            <div className="mb-5 text-center text-lg-start position-relative">
              <h2 className="fw-bold mb-3" style={{ color: '#004E64' }}>Who We Are</h2>
              <p className="text-muted mb-0">
                We are a dedicated team committed to fostering growth, innovation, and community.
              </p>
              <div className="position-absolute bottom-0 start-0 w-50 h-1" style={{ backgroundColor: '#25A18E' }}></div>
            </div>

            {/* Content Cards */}
            <Row className="g-4">
              {contentSections.map((section, index) => (
                <Col md={12} key={index}>
                  <Card className="h-100 border-0 shadow-sm" style={{ transition: 'all 0.3s ease', backgroundColor: '#fff' }}>
                    <Card.Body className="p-4">
                      <div className="d-flex">
                        <div className="me-4">
                          <i className={`${section.icon} fs-3`} style={{ color: '#25A18E' }}></i>
                        </div>
                        <div>
                          <Card.Title className="fw-bold mb-3" style={{ color: '#004E64' }}>{section.title}</Card.Title>
                          <Card.Text className="text-muted mb-0">
                            {section.description}
                          </Card.Text>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
