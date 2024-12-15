
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    console.log("Access denied: Redirecting to login");
    return <Navigate to="/login" replace />;
  }

  console.log("Access granted: Rendering children");
  return children;
};

export default ProtectedRoute;

