


import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import './KeyAchievements.css'; // Add custom styles here

const KeyAchievements = () => {
    const [achievements, setAchievements] = useState([]);

    // Fetch achievements from the backend
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/achievements')  // Replace with your Flask API URL
            .then(response => {
                setAchievements(response.data);  // Set the data in state
            })
            .catch(error => {
                console.error('Error fetching achievements:', error);
            });
    }, []);

    return (
        <Container className="key-achievements my-5">
            <h2 className="text-center mb-4">Key Achievements</h2>
            <Row>
                {achievements.map((achievement, index) => (
                    <Col md={4} sm={6} key={index} className="mb-4">
                        <Card className="achievement-card shadow border-0">
                            <div className="achievement-img-container">
                                {/* Prepend the Flask server URL to the image path */}
                                <Card.Img 
                                    variant="top" 
                                    src={`http://127.0.0.1:5000${achievement.img_url}`} 
                                    alt={achievement.title} 
                                    className="achievement-img" 
                                />
                                <div className="achievement-overlay">
                                    <div className="achievement-text">
                                        <Card.Title>{achievement.title}</Card.Title>
                                        <Card.Text>{achievement.description}</Card.Text>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default KeyAchievements;
