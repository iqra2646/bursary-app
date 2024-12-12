// import React from 'react';
// import InfoSection from './InfoSection';
// import NavBar from './Navbar';
// import Footer from './Footer';

// function HomePage() {
//   return (
//     <div className="home-page">
//       <h1>Welcome to the Bursary Management System</h1>
//       <p>Use the navigation menu to explore the system.</p>


//       <div className="container-fluid">
//       {/* Include the Navbar at the top */}
//       <CustomNavbar />
      
//       <div className="row min-vh-100">
//         {/* Left side - Image */}
//         <div className="col-md-6 d-none d-md-block bg-image">
//           <img 
//             src="/bb mp photo/WhatsApp Image 2024-10-07 at 9.42.53 PM.jpeg"
//             alt="Bursary Info" 
//             className="img-fluid h-100 w-100" 
//             style={{ objectFit: 'cover' }}
//           />
//         </div>
        
//         {/* Center - Login form */}
//         <div className="col-md-3 d-flex align-items-center justify-content-center">
//           <div className="login-form">
//             <h3 className="text-center mb-4">Sign In</h3>
//             <form>
//               <div className="mb-3">
//                 <label htmlFor="username" className="form-label">Username</label>
//                 <input type="text" className="form-control" id="username" placeholder="National ID / NEMIS Number" />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="password" className="form-label">Password</label>
//                 <input type="password" className="form-control" id="password" placeholder="Password" />
//               </div>
//               <button type="submit" className="btn btn-primary w-100">Login</button>
//               <div className="text-center mt-3">
//                 <a href="/register">Register</a> | <a href="/forgot-password">Forgot Password</a>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* Right side - Requirements */}
//         <div className="col-md-3 d-flex align-items-center justify-content-center bg-light">
//           <div className="requirements">
//             <h5 className="text-center">Requirements</h5>
//             <p>Registration is a 2-part process:</p>
//             <h6>Part 1: Account Registration</h6>
//             <ul>
//               <li>Parent/Guardian Full Name</li>
//               <li>ID Number</li>
//               <li>NEMIS Number (Secondary Schools)</li>
//             </ul>
//             <h6>Part 2: Bursary Application</h6>
//             <ul>
//               <li>Siblings' Name & Fee Balances</li>
//               <li>Parent/Guardian Monthly Income</li>
//             </ul>
//             <button className="btn btn-outline-primary w-100">Download How-To Manual</button>
//           </div>
//         </div>
//       </div>

//       <NavBar />
//       <InfoSection />
//       <Footer />
//     </div>
//     </div>
//   );
// }

// export default HomePage;



import cdfLaunchImage from './images/cdf lounch.jpeg';

import React from 'react';
import InfoSection from './InfoSection';

function HomePage() {
  return (
    <div className="home-page">

      {/* <h1>Welcome to the Bursary Management System</h1>
      <p>Use the navigation menu to explore the system.</p> */}

      <div className="container-fluid">
        <div className="row min-vh-100">
          {/* Left side - Image */}
          <div className="col-md-6 d-none d-md-block bg-image">
            <img 
              src={cdfLaunchImage} 
              alt="Bursary Info" 
              className="img-fluid h-100 w-100" 
              style={{ objectFit: 'cover' }}
            />
          </div>
        
          {/* Center - Login form */}
          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <div className="login-form">
              <h3 className="text-center mb-4">Sign In</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="National ID / NEMIS Number" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <div className="text-center mt-3">
                  <a href="/register">Register</a> | <a href="/forgot-password">Forgot Password</a>
                </div>
              </form>
            </div>
          </div>

          {/* Right side - Requirements */}
          <div className="col-md-3 d-flex align-items-center justify-content-center bg-light">
            <div className="requirements">
              <h5 className="text-center">Requirements</h5>
              <p>Registration is a 2-part process:</p>
              <h6>Part 1: Account Registration</h6>
              <ul>
                <li>Parent/Guardian Full Name</li>
                <li>ID Number</li>
                <li>NEMIS Number (Secondary Schools)</li>
              </ul>
              <h6>Part 2: Bursary Application</h6>
              <ul>
                <li>Siblings' Name & Fee Balances</li>
                <li>Parent/Guardian Monthly Income</li>
              </ul>
              <button className="btn btn-outline-primary w-100">Download How-To Manual</button>
            </div>
          </div>
        </div>
        <InfoSection />
      </div>
    </div>
  );
}

export default HomePage;

