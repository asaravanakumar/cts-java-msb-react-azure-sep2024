import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// Router Guard in React JS
const ProtectedRoutes: React.FC = (): React.ReactElement | null => {
  const isAuthenticated = sessionStorage.getItem("token") ? true : false;

  if (isAuthenticated) {
    return <Outlet />; // protected comp will appear
  } else {
    // Redirect to login page
    return <Navigate to="auth/login" replace={false} />;
  }
};

export default ProtectedRoutes;
