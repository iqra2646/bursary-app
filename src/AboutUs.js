import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './AboutUs.css'; // This file will contain the custom styling

const AboutUs = () => {
  return (
    <Container className="about-us-section mt-5">
      <Row>
        <Col className="text-center">
          <h1 className="about-us-title">About Us</h1>
          <p className="about-us-intro">
            Welcome to the Bursary Application Portal! We're here to support your academic journey.
          </p>
          <Button variant="primary" className="learn-more-btn">Learn More</Button>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6}>
          <Card className="about-card shadow-sm">
            <Card.Body>
              <Card.Title className="card-title-custom">Our Mission</Card.Title>
              <Card.Text className="card-text-custom">
                Our mission is to support underprivileged and high-achieving students by offering bursaries to help ease the financial burden of their studies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="about-card shadow-sm">
            <Card.Body>
              <Card.Title className="card-title-custom">Our Vision</Card.Title>
              <Card.Text className="card-text-custom">
                We envision a future where every student has the opportunity to achieve their academic potential, regardless of their socio-economic background.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12}>
          <Card className="about-card shadow-sm">
            <Card.Body>
              <Card.Title className="card-title-custom">History of the Bursary Program</Card.Title>
              <Card.Text className="card-text-custom">
                Established in Year 2010, our bursary program was created to support students facing financial difficulties but with a strong academic record and a drive to succeed.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12}>
          <Card className="about-card shadow-sm">
            <Card.Body>
              <Card.Title className="card-title-custom">Who Can Apply?</Card.Title>
              <Card.Text className="card-text-custom">
                Our bursary program is open to students who:
                <ul>
                  <li>Are currently enrolled in a recognized institution (heigh school, university, college, or technical institute).</li>
                  <li>Demonstrate financial need.</li>
                  <li>Have a strong academic record.</li>
                  <li>Are committed to making a positive impact on their community.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12}>
          <Card className="about-card shadow-sm">
            <Card.Body>
              <Card.Title className="card-title-custom">Our Impact</Card.Title>
              <Card.Text className="card-text-custom">
                Since our inception, we have helped over  students complete their studies through financial assistance. Our bursary recipients have gone on to make remarkable contributions to society.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12}>
          <Card className="about-card contact-card shadow-sm">
            <Card.Body>
              <Card.Title className="card-title-custom">Contact Us</Card.Title>
              <Card.Text className="card-text-custom">
                Have questions? Reach out to us at:
                <ul>
                  <li><strong>Email:</strong> info@bursaryprogram.org</li>
                  <li><strong>Phone:</strong> +254-0720676534</li>
                  <li><strong>Address:</strong> 123 Education Avenue, Nairobi, Kenya</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
