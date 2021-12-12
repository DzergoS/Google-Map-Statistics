import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const NoAuthRedirect = ({ auth }) => {
  const location = useLocation();
  return (
    <div>{location.pathname !== "/" && !auth ? <Navigate to="/" /> : null}</div>
  );
};

export default NoAuthRedirect;
