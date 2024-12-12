// // import React from 'react';
// // import { Container, Row, Col, Card } from 'react-bootstrap';
// // import './KeyAchievements.css'; // Assuming you'll style it separately

// // const KeyAchievements = () => {
// //     <h1>hi welcome to this</h1>
// //     const achievements = [
// //         {
// //             title: "Over 5,000 Students Funded",
// //             description: "We have provided bursaries to over 5,000 students, enabling them to pursue higher education and build their futures.",
// //             imgUrl: "/src/images/"
// //         },
// //         {
// //             title: "95% Graduation Success Rate",
// //             description: "Our bursary recipients boast a 95% graduation rate, proving the lasting impact of financial support on academic success.",
// //             imgUrl: "https://example.com/image2.jpg"
// //         },
// //         {
// //             title: "Success Stories",
// //             description: "Our students go on to achieve greatness. Many have become leaders in engineering, medicine, and business.",
// //             imgUrl: "https://example.com/image3.jpg"
// //         },
// //         {
// //             title: "Community Impact",
// //             description: "Our bursary recipients have initiated and participated in over 50 community development projects.",
// //             imgUrl: "https://example.com/image4.jpg"
// //         },
// //         {
// //             title: "Top Partnerships",
// //             description: "Partnering with over 20 institutions to ensure students receive the best education and opportunities for growth.",
// //             imgUrl: "https://example.com/image5.jpg"
// //         },
// //         {
// //             title: "Award-Winning Program",
// //             description: "Recognized as the 'Best Educational Support Initiative' by the National Education Council.",
// //             imgUrl: "https://example.com/image6.jpg"
// //         }
// //     ];

// //     return (
// //         <Container className="key-achievements my-5">
// //             <h2 className="text-center mb-4">Key Achievements</h2>
// //             <Row>
// //                 {achievements.map((achievement, index) => (
// //                     <Col md={4} sm={6} key={index} className="mb-4">
// //                         <Card className="achievement-card shadow">
// //                             <Card.Img variant="top" src={achievement.imgUrl} alt={achievement.title} className="achievement-img"/>
// //                             <Card.Body>
// //                                 <Card.Title>{achievement.title}</Card.Title>
// //                                 <Card.Text>{achievement.description}</Card.Text>
// //                             </Card.Body>
// //                         </Card>
// //                     </Col>
// //                 ))}
// //             </Row>
// //         </Container>
// //     );
// // };

// // export default KeyAchievements;





// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { FaGraduationCap, FaHandshake, FaTrophy, FaUsers, FaAward, FaBuilding } from 'react-icons/fa';
// import './KeyAchievements.css'; // Add custom styles here

// const KeyAchievements = () => {
//     const achievements = [
//         {
//             title: "Over 5,000 Students Funded",
//             description: "We have provided bursaries to over 5,000 students, enabling them to pursue higher education and build their futures.",
//             imgUrl: "/images/student-funded.jpg",
//             icon: <FaUsers size={40} />
//         },
//         {
//             title: "95% Graduation Success Rate",
//             description: "Our bursary recipients boast a 95% graduation rate, proving the lasting impact of financial support on academic success.",
//             imgUrl: "/images/graduation-rate.jpg",
//             icon: <FaGraduationCap size={40} />
//         },
//         {
//             title: "Community Impact",
//             description: "Our bursary recipients have initiated and participated in over 50 community development projects.",
//             imgUrl: "/images/community-impact.jpg",
//             icon: <FaBuilding size={40} />
//         },
//         {
//             title: "Top Partnerships",
//             description: "Partnering with over 20 institutions to ensure students receive the best education and opportunities for growth.",
//             imgUrl: "/images/partnerships.jpg",
//             icon: <FaHandshake size={40} />
//         },
//         {
//             title: "Award-Winning Program",
//             description: "Recognized as the 'Best Educational Support Initiative' by the National Education Council.",
//             imgUrl: "/images/award-winning.jpg",
//             icon: <FaAward size={40} />
//         },
//         {
//             title: "Success Stories",
//             description: "Our students go on to achieve greatness. Many have become leaders in engineering, medicine, and business.",
//             imgUrl: "/images/success-stories.jpg",
//             icon: <FaTrophy size={40} />
//         }
//     ];

//     return (
//         <Container className="key-achievements my-5">
//             <h2 className="text-center mb-4">Key Achievements</h2>
//             <Row>
//                 {achievements.map((achievement, index) => (
//                     <Col md={4} sm={6} key={index} className="mb-4">
//                         <Card className="achievement-card shadow border-0">
//                             <div className="achievement-img-container">
//                                 <Card.Img variant="top" src={achievement.imgUrl} alt={achievement.title} className="achievement-img" />
//                                 <div className="achievement-overlay">
//                                     <div className="icon-container">
//                                         {achievement.icon}
//                                     </div>
//                                     <div className="achievement-text">
//                                         <Card.Title>{achievement.title}</Card.Title>
//                                         <Card.Text>{achievement.description}</Card.Text>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// };

// export default KeyAchievements;
