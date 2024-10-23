// Fn Components with Arrow function

import { NavLink } from "react-router-dom";

const MenuList = () => {
  let isAuthenticated = sessionStorage.getItem("token") ? true : false;

  function handleLogout() {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  }

  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/products">
          Products
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/user-manager">
          Users
        </NavLink>
      </li>

      <li className="nav-item">
        {!isAuthenticated && (
          <NavLink className="nav-link" to="/auth/login">
            Login
          </NavLink>
        )}

        {isAuthenticated && (
          <NavLink
            className="nav-link"
            to="/auth/logout"
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        )}
      </li>

      {/* <li className="nav-item">
        <Link className="nav-link" to="/customers">
          Customers
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/orders">
          Todos
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact-us">
          Contact
        </Link>
      </li> */}
    </ul>
  );
};

export default MenuList;
