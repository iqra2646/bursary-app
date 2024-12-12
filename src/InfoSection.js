

// import mentorImage from './images/mentor_mehesh_pic.jfif';
// import React from 'react';
// import CountUp from 'react-countup';
// import './InfoSection.css'; // Optional: create a CSS file for styling

// function InfoSection() {
//   return (
//     <div className="container my-5">
//       <div className="row">
//         {/* Left side - Text content */}
//         <div className="col-md-6">
//           <h2>About Balambala Bursary</h2>
//           <p>
//             The Balambala Bursary Management System aims to streamline the 
//             application and disbursement process for bursaries. Our mission is 
//             to support students from low-income families by providing financial 
//             assistance, allowing them to focus on their studies without the 
//             burden of financial constraints.
//           </p>
//           <p>
//             Through our user-friendly platform, parents and guardians can 
//             easily apply for bursaries, track their application status, and 
//             manage their accounts. We are committed to ensuring that education 
//             is accessible to all deserving students in the Balambala Constituency.
//           </p>
          
//           {/* Key Achievements Section */}
//           <h5>Our Key Achievements:</h5>
//           <ol>
//             <li>Distributed over 500 bursaries to students in need.</li>
//             <li>Organized educational workshops for over 1,000 participants.</li>
//             <li>Partnered with local businesses to fund scholarships.</li>
//             <li>Established mentorship programs connecting students with industry professionals.</li>
//           </ol>

//           {/* Read More Button */}
//           <div className="text-center my-3">
//             <button className="btn btn-primary btn-lg">
//               Read More
//             </button>
//           </div>
//         </div>
        
//         {/* Right side - Image */}
//         <div className="col-md-6">
//           <div className="text-center">
//             <h4>Our Patron</h4>
//             <img 
//              src={mentorImage}  
//               alt="Vision" 
//               className="img-fluid" 
//               style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
//             />
//             <p>Hon. Abdi Omar Shuriye, MP</p>
//           </div>
//         </div>
//       </div>

//       {/* Apply for Bursary Section */}
//       <div className="apply-section text-center my-5">


//         <h2>Apply For Bursary</h2>
//         <p>
//           Constituency Development Fund (CDF) bursaries are provided by Members of Parliament (MPs) to support students from their respective constituencies. 
//           The bursaries cover various education-related costs, including tuition fees, uniforms, and stationery.
//         </p>
//         <div className="my-4">
//           <button className="btn btn-outline-light mx-2">Higher Education Bursary</button>
//           <button className="btn btn-outline-light mx-2">High School Bursary</button>
//           <button className="btn btn-outline-light mx-2">Balambala Free Secondary Education Programme</button>
//         </div>
//       </div>


//       {/* Statistics Section */}
//       <div className="row text-center">
//         <div className="col-md-3">
//           <div className="stat-card bg-light p-4">
//             <h1>
//               <CountUp start={0} end={8534} duration={3.5} separator="," startOnViewportEnter />
//             </h1>
//             <p>Students who have received bursary</p>
//             <a href="#" className="btn btn-link">Find out more &raquo;</a>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="stat-card bg-light p-4">
//             <h1>
//               <CountUp start={0} end={21} duration={3.5} startOnViewportEnter />
//             </h1>
//             <p>Projects completed</p>
//             <a href="#" className="btn btn-link">Find out more &raquo;</a>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="stat-card bg-light p-4">
//             <h1>
//               <CountUp start={0} end={16} duration={3.5} startOnViewportEnter />
//             </h1>
//             <p>Schools built in our constituency</p>
//             <a href="#" className="btn btn-link">Find out more &raquo;</a>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="stat-card bg-light p-4">
//             <h1>
//               <CountUp start={0} end={55} duration={3.5} separator="," startOnViewportEnter />
//             </h1>
//             <p>Fees in millions paid for all students</p>
//             <a href="#" className="btn btn-link">Find out more &raquo;</a>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default InfoSection;






// import React from 'react';
// import mentorImage from './images/mentor_mehesh_pic.jfif';
// // import garissaMap from './images/garissa_map.jpg'; // Add your Garissa County map image here
// import CountUp from 'react-countup';
// import './InfoSection.css';

// function InfoSection() {
//   return (
//     <div className="container my-5">
//       <div className="row">
//         {/* About Section */}
//         <div className="col-md-6">
//           <h2>About Balambala Bursary</h2>
//           <p>
//             The Balambala Bursary Management System aims to streamline the 
//             application and disbursement process for bursaries. Our mission is 
//             to support students from low-income families by providing financial 
//             assistance, allowing them to focus on their studies without the 
//             burden of financial constraints.
//           </p>
//           {/* Other content */}
//         </div>
        
//         {/* Patron Section */}
//         <div className="col-md-6">
//           <div className="text-center">
//             <h4>Our Patron</h4>
//             <img src={mentorImage} alt="Vision" className="img-fluid" />
//             <p>Hon. Abdi Omar Shuriye, MP</p>
//           </div>
//         </div>
//       </div>

//       {/* Eligibility with Map Section */}
//       <div className="row eligibility-section my-5">
//         <div className="col-md-6 text-center">
//           <img src="/images/garissa_map.jpg" alt="Garissa County Map" className="img-fluid map-image" />
//         </div>
//         <div className="col-md-6 eligibility-list-container">
//           <h2>Who is Eligible to Apply</h2>
//           <div className="eligibility-list">
//             {[
//               'Must be a Kenyan citizen.',
//               'Must be a resident and voter of Balambala Constituency.',
//               'Must be enrolled in a recognized secondary school or tertiary institution.',
//               'Must demonstrate financial need or come from a low-income family.',
//               'Priority given to orphans, disabled students, and other vulnerable groups.',
//               'Must provide proof of enrollment and a fee structure from the school or institution.',
//               'Must submit a fully completed CDF bursary application form through online.'
//             ].map((criteria, index) => (
//               <div key={index} className="eligibility-item">
//                 {criteria}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Rest of the Info Section */}
//     </div>
//   );
// }

// export default InfoSection;








// import React from 'react';
// import mentorImage from './images/mentor_mehesh_pic.jfif';
// // import garissaMap from './images/garissa_map.jpg'; // Add your Garissa County map image here
// import CountUp from 'react-countup';
// import './InfoSection.css';

// function InfoSection() {
//   return (
//     <div className="container my-5">
//       <div className="row">
//         {/* About Section */}
//         <div className="col-md-6">
//           <h2>About Balambala Bursary</h2>
//           <p>
//             The Balambala Bursary Management System aims to streamline the 
//             application and disbursement process for bursaries. Our mission is 
//             to support students from low-income families by providing financial 
//             assistance, allowing them to focus on their studies without the 
//             burden of financial constraints.
//           </p>
//         </div>
        
//         {/* Patron Section */}
//         <div className="col-md-6">
//           <div className="text-center">
//             <h4>Our Patron</h4>
//             <img src={mentorImage} alt="Vision" className="img-fluid" />
//             <p>Hon. Abdi Omar Shuriye, MP</p>
//           </div>
//         </div>
//       </div>

//       {/* Eligibility with Map Section */}
//       <div className="row eligibility-section my-5">
//         <div className="col-md-6 text-center">
//           <img src="/images/garissa_map.jpg" alt="Garissa County Map" className="img-fluid map-image" />
//         </div>
//         <div className="col-md-6 eligibility-list-container">
//           <h2>Who is Eligible to Apply</h2>
//           <div className="eligibility-list">
//             {[
//               'Must be a Kenyan citizen.',
//               'Must be a resident and voter of Balambala Constituency.',
//               'Must be enrolled in a recognized secondary school or tertiary institution.',
//               'Must demonstrate financial need or come from a low-income family.',
//               'Priority given to orphans, disabled students, and other vulnerable groups.',
//               'Must provide proof of enrollment and a fee structure from the school or institution.',
//               'Must submit a fully completed CDF bursary application form through online.'
//             ].map((criteria, index) => (
//               <div key={index} className="eligibility-item">
//                 {criteria}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Statistics Section */}
//       <div className="row text-center">
//         <div className="col-md-3">
//           <div className="stat-card bg-light p-4">
//             <h1><CountUp end={8534} duration={5} /></h1>
//             <p>Students who have received bursary</p>
//             <a href="#" className="btn btn-link">Find out more &raquo;</a>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="stat-card bg-light p-4">
//             <h1><CountUp end={21} duration={5} /></h1>
//             <p>Projects completed</p>
//             <a href="#" className="btn btn-link">Find out more &raquo;</a>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="stat-card bg-light p-4">
//             <h1><CountUp end={16} duration={5} /></h1>
//             <p>Schools built in our constituency</p>
//             <a href="#" className="btn btn-link">Find out more &raquo;</a>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="stat-card bg-light p-4">
//             <h1><CountUp end={55} duration={5} /></h1>
//             <p>Fees in millions paid for all students</p>
//             <a href="#" className="btn btn-link">Find out more &raquo;</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InfoSection;





// import mentorImage from './images/mentor_mehesh_pic.jfif';
// // import mapImage from './images/garissa_map.jpg'; // Add your map image here
// import React from 'react';
// import CountUp from 'react-countup';
// import './InfoSection.css'; // CSS file for custom styling

// function InfoSection() {
//   return (
//     <div className="container my-5">
//       <div className="row">
//         {/* Left side - Text content */}
//         <div className="col-md-6">
//           <h2>About Balambala Bursary</h2>
//           <p>
//             The Balambala Bursary Management System aims to streamline the 
//             application and disbursement process for bursaries. Our mission is 
//             to support students from low-income families by providing financial 
//             assistance, allowing them to focus on their studies without the 
//             burden of financial constraints.
//           </p>
//           <p>
//             Through our user-friendly platform, parents and guardians can 
//             easily apply for bursaries, track their application status, and 
//             manage their accounts. We are committed to ensuring that education 
//             is accessible to all deserving students in the Balambala Constituency.
//           </p>
          
//           {/* Key Achievements Section */}
//           <h5>Our Key Achievements:</h5>
//           <ol>
//             <li>Distributed over 500 bursaries to students in need.</li>
//             <li>Organized educational workshops for over 1,000 participants.</li>
//             <li>Partnered with local businesses to fund scholarships.</li>
//             <li>Established mentorship programs connecting students with industry professionals.</li>
//           </ol>

//           {/* Read More Button */}
//           <div className="text-center my-3">
//             <button className="btn btn-primary btn-lg">
//               Read More
//             </button>
//           </div>
//         </div>
        
//         {/* Right side - Image */}
//         <div className="col-md-6">
//           <div className="text-center">
//             <h4>Our Patron</h4>
//             <img 
//               src={mentorImage}  
//               alt="Vision" 
//               className="img-fluid" 
//               style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
//             />
//             <p>Hon. Abdi Omar Shuriye, MP</p>
//           </div>
//         </div>
//       </div>

//       {/* Eligibility Section and Map */}
//       <div className="row eligibility-section my-5">
//         {/* Left - Map Image */}
//         <div className="col-md-6">
//           <div className="text-center">
//             <img src="/images/garissa_map.jpg" alt="Garissa County Map" className="img-fluid rounded" />
//           </div>
//         </div>

//         {/* Right - Eligibility Criteria */}
//         <div className="col-md-6">
//           <h2>Who is Eligible to Apply</h2>
//           <div className="eligibility-list">
//             <div className="eligibility-item">Must be a Kenyan citizen.</div>
//             <div className="eligibility-item">Must be a resident and voter of Balambala Constituency.</div>
//             <div className="eligibility-item">Must be enrolled in a recognized secondary school or tertiary institution.</div>
//             <div className="eligibility-item">Must demonstrate financial need or come from a low-income family.</div>
//             <div className="eligibility-item">Priority given to orphans, disabled students, and other vulnerable groups.</div>
//             <div className="eligibility-item">Must provide proof of enrollment and a fee structure from the school or institution.</div>
//             <div className="eligibility-item">Must submit a fully completed CDF bursary application form online.</div>
//           </div>
//         </div>
//       </div>

//       {/* Apply for Bursary Section */}
//       <div className="apply-section text-center my-5">
//         <h2>Apply For Bursary</h2>
//         <p>
//           Constituency Development Fund (CDF) bursaries are provided by Members of Parliament (MPs) to support students from their respective constituencies. 
//           The bursaries cover various education-related costs, including tuition fees, uniforms, and stationery.
//         </p>
//         <div className="my-4">
//           <button className="btn btn-outline-light mx-2">Higher Education Bursary</button>
//           <button className="btn btn-outline-light mx-2">High School Bursary</button>
//           <button className="btn btn-outline-light mx-2">Balambala Free Secondary Education Programme</button>
//         </div>
//       </div>

//       {/* Statistics Section */}
//       <div className="row text-center">
//         <div className="col-md-3">
//           <div className="stat-card bg-light p-4">
//             <h1>
//               <CountUp start={0} end={8534} duration={2.5} separator="," startOnViewportEnter />
//             </h1>
//             <p>Students who have received bursary</p>
//             <a href="#" className="btn btn-link">Find out more &raquo;</a>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="stat-card bg-light p-4">
//             <h1>
//               <CountUp start={0} end={21} duration={2.5} startOnViewportEnter />
//             </h1>
//             <p>Projects completed</p>
//             <a href="#" className="btn btn-link">Find out more &raquo;</a>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="stat-card bg-light p-4">
//             <h1>
//               <CountUp start={0} end={16} duration={2.5} startOnViewportEnter />
//             </h1>
//             <p>Schools built in our constituency</p>
//             <a href="#" className="btn btn-link">Find out more &raquo;</a>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="stat-card bg-light p-4">
//             <h1>
//               <CountUp start={0} end={55} duration={2.5} separator="," startOnViewportEnter />
//             </h1>
//             <p>Fees in millions paid for all students</p>
//             <a href="#" className="btn btn-link">Find out more &raquo;</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InfoSection;









import React, { useState, useEffect } from 'react';
import mentorImage from './images/mentor_mehesh_pic.jfif';
import CountUp from 'react-countup';
import './InfoSection.css'; // CSS file for custom styling

function InfoSection() {
  const [visibleItems, setVisibleItems] = useState(0);

  const eligibilityItems = [
    "Must be a Kenyan citizen.",
    "Must be a resident and voter of Balambala Constituency.",
    "Must be enrolled in a recognized secondary school or tertiary institution.",
    "Must demonstrate financial need or come from a low-income family.",
    "Priority given to orphans, disabled students, and other vulnerable groups.",
    "Must provide proof of enrollment and a fee structure from the school or institution.",
    "Must submit a fully completed CDF bursary application form online.",
  ];

  useEffect(() => {
    if (visibleItems < eligibilityItems.length) {
      const timer = setTimeout(() => setVisibleItems(visibleItems + 1), 1000); // 1-second delay
      return () => clearTimeout(timer);
    }
  }, [visibleItems, eligibilityItems.length]);

  return (
    <div className="container my-5">
      <div className="row">
        {/* Left side - Text content */}
        <div className="col-md-6">
          <h2>About Balambala Bursary</h2>
          <p>
            The Balambala Bursary Management System aims to streamline the 
            application and disbursement process for bursaries. Our mission is 
            to support students from low-income families by providing financial 
            assistance, allowing them to focus on their studies without the 
            burden of financial constraints.
          </p>
          <p>
            Through our user-friendly platform, parents and guardians can 
            easily apply for bursaries, track their application status, and 
            manage their accounts. We are committed to ensuring that education 
            is accessible to all deserving students in the Balambala Constituency.
          </p>
          
          <h5>Our Key Achievements:</h5>
          <ol>
            <li>Distributed over 500 bursaries to students in need.</li>
            <li>Organized educational workshops for over 1,000 participants.</li>
            <li>Partnered with local businesses to fund scholarships.</li>
            <li>Established mentorship programs connecting students with industry professionals.</li>
          </ol>

          <div className="text-center my-3">
            <button className="btn btn-primary btn-lg">Read More</button>
          </div>
        </div>
        
        {/* Right side - Image */}
        <div className="col-md-6">
          <div className="text-center">
            <h4>Our Patron</h4>
            <img 
              src={mentorImage}  
              alt="Vision" 
              className="img-fluid" 
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
            />
            <p>Hon. Abdi Omar Shuriye, MP</p>
          </div>
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="row eligibility-section my-5">
        <div className="col-md-6">
          <div className="text-center">
            <img src="/images/garissa_map.jpg" alt="Garissa County Map" className="img-fluid rounded" />
          </div>
        </div>
        <div className="col-md-6">
          <h2>Who is Eligible to Apply</h2>
          <div className="eligibility-list">
            {eligibilityItems.map((item, index) => (
              <div
                key={index}
                className={`eligibility-item ${index < visibleItems ? 'visible' : ''}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Apply for Bursary Section */}
      <div className="apply-section text-center my-5">
        <h2>Apply For Bursary</h2>
        <p>
          Constituency Development Fund (CDF) bursaries are provided by Members of Parliament (MPs) to support students from their respective constituencies. 
          The bursaries cover various education-related costs, including tuition fees, uniforms, and stationery.
        </p>
        <div className="my-4">
          <button className="btn btn-outline-light mx-2">Higher Education Bursary</button>
          <button className="btn btn-outline-light mx-2">High School Bursary</button>
          <button className="btn btn-outline-light mx-2">Balambala Free Secondary Education Programme</button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="row text-center">
        <div className="col-md-3">
          <div className="stat-card bg-light p-4">
            <h1>
              <CountUp start={0} end={8534} duration={4.5} separator="," startOnViewportEnter />
            </h1>
            <p>Students who have received bursary</p>
            <a href="#" className="btn btn-link">Find out more &raquo;</a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stat-card bg-light p-4">
            <h1>
              <CountUp start={0} end={21} duration={4.5} startOnViewportEnter />
            </h1>
            <p>Projects completed</p>
            <a href="#" className="btn btn-link">Find out more &raquo;</a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stat-card bg-light p-4">
            <h1>
              <CountUp start={0} end={16} duration={4.5} startOnViewportEnter />
            </h1>
            <p>Schools built in our constituency</p>
            <a href="#" className="btn btn-link">Find out more &raquo;</a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stat-card bg-light p-4">
            <h1>
              <CountUp start={0} end={55} duration={4.5} separator="," startOnViewportEnter />
            </h1>
            <p>Fees in millions paid for all students</p>
            <a href="#" className="btn btn-link">Find out more &raquo;</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
