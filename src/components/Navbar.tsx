import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="nav_bar">
      <div className="nav_bar_border">
        <div className="logo">My Portfolio</div>
        <ul className="navigators">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="Projects">
            <li>Projects</li>
          </Link>
          <Link to="/Contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
