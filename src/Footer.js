import React from 'react';
import './Footer.css'; // Optional: create a CSS file for styling

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Useful Links */}
          <div className="col-md-3">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/apply" className="text-light">Apply For Bursary</a></li>
              <li><a href="/achievements" className="text-light">Key Achievements</a></li>
              <li><a href="/projects" className="text-light">Projects</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-3">
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li><a href="https://twitter.com" className="text-light">Twitter</a></li>
              <li><a href="https://facebook.com" className="text-light">Facebook</a></li>
              <li><a href="https://youtube.com" className="text-light">YouTube</a></li>
              <li><a href="https://tiktok.com" className="text-light">TikTok</a></li>
            </ul>
          </div>

          {/* Our Location */}
          <div className="col-md-3">
            <h5>Our Location</h5>
            <p>Balambala CDF Office<br />Along Balambala - Garissa road, Next to balambala Tallying center<br />P.O BOX 92-7015 Balambala<br />Email: info@balambalacdf.go.ke</p>
          </div>

          {/* Key Achievements */}
          <div className="col-md-3">
            <h5>Key Achievements</h5>
            <ul className="list-unstyled">
              <li>Sponsored 100 teacher trainees annually in the constituency with an annual cost of KES 7.2M</li>
              <li>Education</li>
              <li>Infrastructure</li>
              <li>Security</li>
              <li>Healthcare</li>
              <li>Water and Sanitation</li>
              <li>Roads</li>
              <li>Free secondary education programme</li>
              <li>Sports Activities</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4">
          <p>© Copyright Balambala CDF 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
