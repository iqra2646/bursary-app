


// import React, { useState } from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap import
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importing React Router components
// import CustomNavbar from './Navbar';  // Import the Navbar component
// import Footer from './Footer'; // Adjust the path as necessary
// import ApplyForBursary from './ApplyForBursary';  // Import ApplyForBursary component
// import AboutUs from './AboutUs';
// import Achievements from './Achievements';
// import HomePage from './HomePage';

// import Login from './Login';  // Import Login component
// // import Signup from './Signup';  // Import Signup component
// import Profile from './Profile';  // Import Profile component (for logged-in users)
// import Registration from './Registration';
// import ApplicantDashboard from"./ApplicantDashboard"
// import AdminDashboard from './Admin/AdminDashboard';
// import AdminAchievements from "./Admin/AdminAchievements";


// // App component
// function App() {
//   // State to manage authentication status
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null); // Store user info when logged in

//   // Function to handle login (you will call this after successful login)
//   const handleLogin = (userData) => {
//     setIsAuthenticated(true);
//     setUser(userData);  // Set user information
//   };

//   // Function to handle logout
//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//   };

//   return (
//     <Router>
//       <div className="container-fluid">
//         {/* Include the Navbar at the top, passing login/logout state and handlers */}
//         <CustomNavbar isAuthenticated={isAuthenticated} user={user} handleLogout={handleLogout} />

//         {/* Routing for different components */}
//         <Routes>
//           {/* Default route - Home Page */}
//           <Route path="/" element={<HomePage />} />

//           {/* Apply For Bursary Page Route */}
//           <Route path="/apply-for-bursary" element={<ApplyForBursary />} />
          
//           {/* Other Routes */}
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/achievements" element={<Achievements />} />
//         <Route path="/profile" element={<Profile />} />
      
        
//           <Route path="/Registration" element={<Registration/>} />
//           <Route path="/register" element={<Registration />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/ApplicantDashboard" element={<ApplicantDashboard />} />

          
//           <Route path="/AdminDashboard" element={<AdminDashboard />} />
//           <Route path="/admin/achievements" element={<AdminAchievements />} />



//           {/* Login and Signup Routes */}
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />  {/* Pass handleLogin to Login component */}
         

//           {/* Profile Route (only accessible when logged in) */}
//           {isAuthenticated && (
//             <Route path="/profile" element={<Profile user={user} />} />  // Show profile page for logged-in users
//           )}
//         </Routes>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;





import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importing React Router components
import CustomNavbar from './Navbar';  // Import the Navbar component
import Footer from './Footer'; // Adjust the path as necessary
import ApplyForBursary from './ApplyForBursary';  // Import ApplyForBursary component
import AboutUs from './AboutUs';
import Achievements from './Achievements';
import HomePage from './HomePage';

import Login from './Login';  // Import Login component
// import Signup from './Signup';  // Import Signup component
import Profile from './Profile';  // Import Profile component (for logged-in users)
import Registration from './Registration';
import ApplicantDashboard from "./ApplicantDashboard";
import AdminDashboard from './Admin/AdminDashboard';
import AdminAchievements from "./Admin/AdminAchievements";

// App component
function App() {
  // State to manage authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Store user info when logged in

  // Function to handle login (you will call this after successful login)
  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);  // Set user information
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="container-fluid">
        {/* Include the Navbar at the top, passing login/logout state and handlers */}
        <CustomNavbar isAuthenticated={isAuthenticated} user={user} handleLogout={handleLogout} />

        {/* Routing for different components */}
        <Routes>
          {/* Default route - Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Apply For Bursary Page Route */}
          <Route path="/apply-for-bursary" element={<ApplyForBursary />} />
          
          {/* Other Routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/profile" element={<Profile />} />
        
          <Route path="/Registration" element={<Registration />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ApplicantDashboard" element={<ApplicantDashboard />} />

          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/admin/achievements" element={<AdminAchievements />} />  {/* Admin Achievements route */}

          {/* Login and Signup Routes */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />  {/* Pass handleLogin to Login component */}

          {/* Profile Route (only accessible when logged in) */}
          {isAuthenticated && (
            <Route path="/profile" element={<Profile user={user} />} />  // Show profile page for logged-in users
          )}
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
