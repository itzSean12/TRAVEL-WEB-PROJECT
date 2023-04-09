import React from "react";
import "./Navbar.css";
import navLogo from "../images/my-project.png";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "../images/icons8-shopping-cart-64.png";

const Navbar = ({ ticketCount, cartCount }) => {
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
        <Link className="link" to="cart">
          <div className="cart-icon-container">
            <img className="logo-img-2" src={ShoppingCartIcon} alt="" />
            <div className="cart-amount">{cartCount}</div>
          </div>
        </Link>
      </div>
      <div className="nav-item">
        <div>
          <a href="/">Sign Out</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
