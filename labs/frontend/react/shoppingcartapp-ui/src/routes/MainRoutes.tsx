import { Routes, Route } from "react-router-dom";
import AddUser from "../components/user-manager/AddUser";
import UserDetails from "../components/user-manager/UserDetails";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import UserManagerPage from "../pages/UserManagerPage";
import ProtectedRoutes from "./ProtectedRoutes";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* This url is dynamic and having id as url param */}
      <Route path="/auth/login" element={<LoginPage />} />

      {/* The following routes are protected. You need to login to access them */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/user-manager" element={<UserManagerPage />} />
        <Route path="/user-manager/add" element={<AddUser />} />
        <Route path="/user-manager/:id" element={<UserDetails />} />
        <Route path="/products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
