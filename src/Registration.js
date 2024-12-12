
// import './Registration.css';  // Custom CSS for styling
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

// function Registration() {
//   const [formData, setFormData] = useState({
//     full_Name: '',
//     schoolName: '',
//     admissionNumber: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if passwords match
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       // Send data to backend for registration
//       const response = await axios.post('http://127.0.0.1:5000/register', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       });

//       // Handle successful registration
//       if (response.status === 201) {
//         setSuccess("Registration successful! Redirecting to login...");
//         setError('');
        
//         setTimeout(() => navigate('/login'), 2000);  // Delay for user to see message
        
//       } else {
//         setError("Registration failed. Please try again.");
//       }
//     } catch (err) {
//       // Handle backend error or network issues
//       if (err.response) {
//         // Server responded with an error status
//         setError(err.response.data.error || "An error occurred. Please try again.");
//       } else {
//         // Network error
//         setError("Network error. Please check your connection.");
//       }
//     }
//   };

//   return (
//     <div className="registration-page">
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={6}>
//             <div className="form-container">
//               <h2 className="text-center mb-4">Register</h2>
              
//               {/* Show Success or Error Message */}
//               {success && <Alert variant="success">{success}</Alert>}
//               {error && <Alert variant="danger">{error}</Alert>}

//               <Form onSubmit={handleSubmit}>
//                 {/* Full Name */}
//                 <Form.Group controlId="fullName">
//                   <Form.Label>Full Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="full_Name"
//                     value={formData.full_Name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 {/* School Name */}
//                 <Form.Group controlId="schoolName">
//                   <Form.Label>School Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="schoolName"
//                     value={formData.schoolName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 {/* Admission Number */}
//                 <Form.Group controlId="admissionNumber">
//                   <Form.Label>Admission Number</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="admissionNumber"
//                     value={formData.admissionNumber}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 {/* Email */}
//                 <Form.Group controlId="email">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 {/* Phone Number */}
//                 <Form.Group controlId="phoneNumber">
//                   <Form.Label>Phone Number</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 {/* Password */}
//                 <Form.Group controlId="password">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 {/* Confirm Password */}
//                 <Form.Group controlId="confirmPassword">
//                   <Form.Label>Confirm Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="mt-3" block>
//                   Register
//                 </Button>
//               </Form>

//               {/* Login Link */}
//               <div className="text-center mt-3">
//                 <p>Already have an account? <Link to="/login">Login here</Link></p>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Registration;





import './Registration.css'; // Custom CSS for styling
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

function Registration() {
  const [formData, setFormData] = useState({
    fullName: '',
    admissionNumber: '',
    institutionName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/register',
        {
          full_name: formData.fullName,
          admission_number: formData.admissionNumber,
          institution_name: formData.institutionName,
          email: formData.email,
          phone_number: formData.phoneNumber,
          password: formData.password,
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 201) {
        setSuccess('Registration successful! Redirecting to login...');
        setError('');
        setTimeout(() => navigate('/login'), 3000);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="registration-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="form-container">
              <h2 className="text-center mb-4">Register</h2>
              {success && <Alert variant="success">{success}</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="fullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="institutionName">
                  <Form.Label>Institution Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="institutionName"
                    value={formData.institutionName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="admissionNumber">
                  <Form.Label>Admission Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="admissionNumber"
                    value={formData.admissionNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="phoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3" block>
                  Register
                </Button>
              </Form>

              <div className="text-center mt-3">
                <p>
                  Already have an account? <Link to="/login">Login here</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Registration;
