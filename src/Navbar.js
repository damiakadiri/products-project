import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link className="home-btn" to="/">
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
