import React, { useState } from "react";
import logo from "./assets/tcwa-logo.png";
import "./style.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";

function Nav() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark topbar">
      <img className="logo m-2" src={logo} alt={logo} />
      <a className="navbar-brand abs">TCWA Truck Fitup Register</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse text-right"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <NavLink
            className="nav-link"
            to="/dashboard"
            activeClassName="active"
          >
            Dashboard{" "}
          </NavLink>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/newtruck"
              activeClassName="active"
            >
              New Truck
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/archives"
              activeClassName="active"
            >
              Archives
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dashboard" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
