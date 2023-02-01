import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/graphics/cmap svg.svg";
import "./Header.css";
// import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="main-nav-wrapper">
      <div className="main-nav-grp">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="main-nav-grp nav-grp-links">
        <Link to="/login">Login</Link>
        <Link className="get-started-btn" to="/signup">
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Header;
