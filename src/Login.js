


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

// function Login() {
//   const [email, setEmail] = useState(''); // Email state
//   const [password, setPassword] = useState(''); // Password state
//   const [error, setError] = useState(''); // Error message state
//   const [success, setSuccess] = useState(''); // Success message state
//   const navigate = useNavigate(); // Navigation hook
  
  
//   const handleLogin = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     setError(''); // Clear previous errors
//     setSuccess(''); // Clear previous success message
  
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/login', {
//         email,
//         password,
//       });
  
//       const { access_token, user } = response.data; // Extract token and user info
//       localStorage.setItem('token', access_token); // Save token
//       localStorage.setItem('user', JSON.stringify(user)); // Save user info
  
//       setSuccess('Login successful! Redirecting...'); // Set success message
  
//       // Redirect to ApplicantDashboard by default
//       setTimeout(() => {
//         navigate('/ApplicantDashboard'); // Always redirect to ApplicantDashboard
//       }, 2000); // 2-second delay
//     } catch (err) {
//       console.error('Login error:', err.response || err.message); // Debugging log
//       setError(
//         err.response?.data?.message ||
//         'Invalid credentials or server error. Please try again.' 
//       ); // Display error
//     }
//   };
  

//   return (
//     <div
//       style={{
//         backgroundImage: "url('/images/GERISTRATION BACKGROUND.jpg')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={6}>
//             <div
//               style={{
//                 backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                 padding: '20px',
//                 borderRadius: '10px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             >
//               <h2 className="text-center">Login</h2>

//               {error && <Alert variant="danger">{error}</Alert>}
//               {success && <Alert variant="success">{success}</Alert>}

//               <Form onSubmit={handleLogin}>
//                 <Form.Group controlId="email">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     placeholder="Enter your email"
//                   />
//                 </Form.Group>

//                 <Form.Group controlId="password" className="mt-3">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     placeholder="Enter your password"
//                   />
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="mt-3 w-100">
//                   Login
//                 </Button>
//               </Form>

//               <div className="mt-3 text-center">
//                 <Link to="/register">Don't have an account? Register here</Link>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Login;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

// function Login() {
//   const [email, setEmail] = useState(''); // Email state
//   const [password, setPassword] = useState(''); // Password state
//   const [error, setError] = useState(''); // Error message state
//   const [success, setSuccess] = useState(''); // Success message state
//   const navigate = useNavigate(); // Navigation hook
  
//   const handleLogin = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     setError(''); // Clear previous errors
//     setSuccess(''); // Clear previous success message

//     const [backEndUser, setBackEndUser] = useState('');
    
//     // try {
//     //   const response = await axios.post('http://127.0.0.1:5000/auth/login', {
//     //     email,
//     //     password,
//     //   });
  
//     //   const { token, user } = response.data; // Extract token and user info
//     //   localStorage.setItem('token', token); // Save token
//     //   localStorage.setItem('user', JSON.stringify(user)); // Save user info
  
//     //   setSuccess('Login successful! Redirecting...'); // Set success message
//     event.preventDefault()
//     fetch('http://127.0.0.1:5000/auth/login',{
//       method:"POST",
//       headers:{
//         "content-type":"application/json",
//       },
//       body:JSON.stringify({ }),
//     })

  
// // Redirect to ApplicantDashboard by default
// setTimeout(() => {
//   navigate('/ApplicantDashboard');
// }, 2000); // 2-second delay
//     } catch (err) {
//       console.error('Login error:', err.response || err.message); // Debugging log
//       setError(
//         err.response?.data?.message ||
//         'Invalid credentials or server error. Please try again.' // Display error
//       );
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: "url('/images/GERISTRATION BACKGROUND.jpg')", // Background image URL
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={6}>
//             <div
//               style={{
//                 backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                 padding: '20px',
//                 borderRadius: '10px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             >
//               <h2 className="text-center">Login</h2>

//               {error && <Alert variant="danger">{error}</Alert>}
//               {success && <Alert variant="success">{success}</Alert>}

//               <Form onSubmit={handleLogin}>
//                 <Form.Group controlId="email">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     placeholder="Enter your email"
//                   />
//                 </Form.Group>

//                 <Form.Group controlId="password" className="mt-3">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     placeholder="Enter your password"
//                   />
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="mt-3 w-100">
//                   Login
//                 </Button>
//               </Form>

//               <div className="mt-3 text-center">
//                 <Link to="/register">Don't have an account? Register here</Link>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Login;





// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

// function Login() {
//   const [email, setEmail] = useState(''); // Email state
//   const [password, setPassword] = useState(''); // Password state
//   const [error, setError] = useState(''); // Error message state
//   const [success, setSuccess] = useState(''); // Success message state
//   const [userData, setUserData] = useState(''); // User data state
//   const navigate = useNavigate(); // Navigation hook

//   const handleLogin = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     setError(''); // Clear previous errors
//     setSuccess(''); // Clear previous success message

//     try {
//       const response = await fetch('http://127.0.0.1:5000/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         // Handle HTTP errors
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Login failed');
//       }

//       const data = await response.json(); // Parse JSON response
//       const { user, token } = data; // Extract user and token from the response

//       // Update application state
//       setUserData(user);

//       // Save data to localStorage
//       localStorage.setItem('user', JSON.stringify(user));
//       localStorage.setItem('token', token);

//       // Set success message
//       setSuccess('Login successful! Redirecting...');

//       // Redirect to ApplicantDashboard after a delay
//       setTimeout(() => {
//         navigate('/ApplicantDashboard');
//       }, 2000); // 2-second delay

//     } catch (err) {
//       console.error('Login error:', err.message); // Debugging log
//       setError(err.message || 'Invalid credentials or server error. Please try again.');
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: "url('/images/GERISTRATION BACKGROUND.jpg')", // Background image URL
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={6}>
//             <div
//               style={{
//                 backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                 padding: '20px',
//                 borderRadius: '10px',
//                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//               }}
//             >
//               <h2 className="text-center">Login</h2>

//               {error && <Alert variant="danger">{error}</Alert>}
//               {success && <Alert variant="success">{success}</Alert>}

//               <Form onSubmit={handleLogin}>
//                 <Form.Group controlId="email">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     placeholder="Enter your email"
//                   />
//                 </Form.Group>

//                 <Form.Group controlId="password" className="mt-3">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     placeholder="Enter your password"
//                   />
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="mt-3 w-100">
//                   Login
//                 </Button>
//               </Form>

//               <div className="mt-3 text-center">
//                 <Link to="/register">Don't have an account? Register here</Link>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Login;




import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

function Login({ onLogin }) {  // Add the onLogin prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [userData, setUserData] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://127.0.0.1:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      const { user, token } = data;

      setUserData(user);

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);

      setSuccess('Login successful! Redirecting...');

      // Call onLogin to update the parent component's state
      onLogin(user);  // Update the authentication state in the parent

      setTimeout(() => {
        navigate('/ApplicantDashboard');
      }, 2000); // Redirect to ApplicantDashboard after 2 seconds
    } catch (err) {
      console.error('Login error:', err.message);
      setError(err.message || 'Invalid credentials or server error. Please try again.');
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/GERISTRATION BACKGROUND.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              <h2 className="text-center">Login</h2>

              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}

              <Form onSubmit={handleLogin}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group controlId="password" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3 w-100">
                  Login
                </Button>
              </Form>

              <div className="mt-3 text-center">
                <Link to="/register">Don't have an account? Register here</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;

