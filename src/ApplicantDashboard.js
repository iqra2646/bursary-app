





import React, { useState, useEffect } from "react";
import { ProgressBar, Dropdown } from "react-bootstrap";
import ApplyForBursary from "./ApplyForBursary"; // Import the ApplyForBursary component
import axios from "axios"; // Import Axios for making API calls
import "./ApplicantDashboard.css"; // Assuming you'll style the dashboard separately
import { useNavigate } from "react-router-dom"; // For redirecting the user

const ApplicantDashboard = () => {
  const storedUser = localStorage.getItem('user');
  console.log(storedUser)

    


  const [applicantData, setApplicantData] = useState({
    full_name: "",
    admission_number: "",
    institution_name: "",
    email: "",
    phone_number: "",
    status: "Pending", // Default application status
    applied: false, // Indicates if the applicant has applied
  });

  setApplicantData({
    full_name: storedUser.full_name || "", // Fallback to empty if not available
    admission_number: storedUser.admission_number || "",
    institution_name: storedUser.institution_name || "",
    email: storedUser.email || "",
    phone_number: storedUser.phone_number || "",
    status: "Pending", // Default status
    applied: false, // Default value
  });

  const navigate = useNavigate(); // To navigate programmatically
  const token = localStorage.getItem("token"); // Get the token from localStorage

  // Fetch applicant data from the backend when the component mounts
  useEffect(() => {
    if (!token) {
      console.error("No token found in localStorage");
      navigate("/login"); // Redirect to login if no token is found
      return;
    }

    const fetchApplicantData = async () => {
      const token = localStorage.getItem("token"); // Get the token from localStorage
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }
    
      try {
        const response = await axios.get("http://127.0.0.1:5000/auth/user", {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token in the Authorization header
          },
        });
        setApplicantData(response.data); // Update state with the fetched data
      } catch (error) {
        console.error("Error fetching applicant data:", error.response || error);
        // Handle the error (e.g., show an error message)
      }
    };
    



    fetchApplicantData();
  }, [token, navigate]); // Rerun effect if the token changes (e.g., on logout)

  // Function to render the status message based on the application status
  const renderStatusMessage = () => {
    switch (applicantData.status) {
      case "Approved":
        return (
          <div className="status approved">
            <h4>Congratulations! Your application has been approved.</h4>
            <ProgressBar now={100} label="Approved" variant="success" />
          </div>
        );
      case "Rejected":
        return (
          <div className="status rejected">
            <h4>Sorry, your application was rejected.</h4>
            <ProgressBar now={100} label="Rejected" variant="danger" />
          </div>
        );
      default:
        return (
          <div className="status pending">
            <h4>Your application is under review.</h4>
            <ProgressBar now={50} label="Pending" variant="warning" />
          </div>
        );
    }
  };

  return (
    <div className="applicant-dashboard">
      {/* Profile Menu at the top */}
      <ProfileMenu />

      <div className="dashboard-content">
        {/* Left Sidebar: Applicant Information */}
        <ApplicantInfo applicantData={applicantData} />

        {/* Right Content: Application Progress or Bursary Form */}
        <div className="progress-section">
          <h2>Application Status</h2>
          {applicantData.applied ? (
            renderStatusMessage()
          ) : (
            <ApplyForBursary onApply={() => setApplicantData({ ...applicantData, applied: true })} />
          )}
        </div>
      </div>
    </div>
  );
};

// Profile Menu Component
const ProfileMenu = () => (
  <div className="profile-menu">
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Profile
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
        <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

// Left Sidebar Component: Applicant Information
const ApplicantInfo = ({ applicantData }) => (
  <div className="applicant-info">
    <h3>Applicant Information</h3>
    <ul>
      <li>
        <strong>Full Name:</strong> {applicantData.full_name}
      </li>
      <li>
        <strong>Admission Number:</strong> {applicantData.admission_number}
      </li>
      <li>
        <strong>Institution Name:</strong> {applicantData.institution_name}
      </li>
      <li>
        <strong>Email:</strong> {applicantData.email}
      </li>
      <li>
        <strong>Phone Number:</strong> {applicantData.phone_number}
      </li>
    </ul>
  </div>
);

export default ApplicantDashboard;
