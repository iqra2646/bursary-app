import React from 'react';

function Summary({ prevStep }) {
  return (
    <div>
      <h2>Review Your Information</h2>
      <p>Summary of student details will appear here...</p>
      <button onClick={prevStep}>Go Back</button>
      <button type="submit">Submit Application</button>
    </div>
  );
}

export default Summary;
