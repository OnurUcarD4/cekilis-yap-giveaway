import React from "react";
import { Link } from "react-router-dom";
import "../home.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <Link to="/home">
          <img
            className="header-logo"
            src="https://i.imgur.com/KRWCTYE.png"
            alt="Logo"
          />
        </Link>
        <Link to="/about">
          <span className="header-menu">Ben Kimim?</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
