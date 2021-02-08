import React, { useState } from "react";
import logo from "./assets/tcwa-logo.png";
import "./style.css";
import { useHistory } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext";

function Nav() {
  const [error, setError] = useState("")
  const {  logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark topbar">
      <img className="logo m-2" src={logo} alt={logo} />
      <a className="navbar-brand abs">
        TCWA Truck Fitup Register
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse text-right" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/dashboard">Dashboard </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/newtruck">New Truck</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/archives">Archives</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/dashboard" onClick={handleLogout}>Logout</a>
                </li>
            </ul>
        </div>


      {/* <a className="navbar-brand" href="/">
        Dashboard
      </a>
      <a className="navbar-brand" href="/newtruck">
        New Truck
      </a>
      <a className="navbar-brand" href="/archives">
        Archives
      </a> */}
    </nav>
  );
}

export default Nav;
