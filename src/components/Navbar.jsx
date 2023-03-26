import React from "react";
import "./Navbar.css";
import navLogo from "../images/my-project.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-item">
        <img className="logo-img" src={navLogo} alt="/" />
      </div>
      <div className="nav-item">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-item">
        <Link to="/about">About</Link>
      </div>
      <div className="nav-item">
        <Link to="/discover">Discover</Link>
      </div>
      <div className="nav-item">
        <Link to="/flights">Flights</Link>
      </div>
      <div className="nav-item">
        <Link to="search">Search</Link>
      </div>
    </div>
  );
};

export default Navbar;
