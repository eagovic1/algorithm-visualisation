// src/components/ProtectedRoute/ProtectedRoute.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface ProtectedRouteProps {
  element: React.ReactElement;
  roles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, roles }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!roles.includes(user.role)) {
    return <Navigate to="/notauthorized" replace />;
  }

  return element;
};

export default ProtectedRoute;
