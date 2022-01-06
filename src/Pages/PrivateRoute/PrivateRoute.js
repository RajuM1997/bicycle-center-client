import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./PrivateRoute.css";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();

  if (isLoading) {
    return (
      <div className="spinner">
        <Spinner animation="border" />;
      </div>
    );
  }

  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
