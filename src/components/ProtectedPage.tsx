import React from "react";
import { Navigate } from "react-router-dom";

type AuthWrapperProps = {
  children: React.ReactNode;
};

export const ProtectedPage: React.FC<AuthWrapperProps> = ({ children }) => {
  function hasJWT() {
    return localStorage.getItem("token");
  }

  if (hasJWT()) {
    return <>{children}</>;
  }

  return <Navigate to="/login" replace />;
};
