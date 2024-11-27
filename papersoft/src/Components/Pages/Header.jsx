import React from "react";
import "../Styles/NavbarStyles.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          PaperSoft
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="/services" className="navbar-link">
              Services
            </a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">
              Contact
            </a>
          </li>
          <li className="navbar-item">
            <a href="/login" className="navbar-link">
              Login
            </a>
          </li>
          <li className="navbar-item">
            <a href="/register" className="navbar-link">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
