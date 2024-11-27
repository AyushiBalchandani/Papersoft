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
            <a href="/letter" className="navbar-link">
              Letter
            </a>
          </li>
          <li className="navbar-item">
            <a href="/details" className="navbar-link">
              User Details
            </a>
          </li>
          <li className="navbar-item">
            <a href="/logout" className="navbar-link">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
