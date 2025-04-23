import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, isAuthenticated } = useContext(AuthContext);

  // Not logged in
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  // Logged in, but not authorized
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Authorized
  return <Outlet />;
};

export default ProtectedRoute;
