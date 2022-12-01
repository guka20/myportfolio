import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isUsed, setIsUsed] = useState<boolean>(false);
  return (
    <nav className="navbar">
      <div className="nav">
        <h1>My Portfolio</h1>
        <ul id="links" className={isActive ? "animate" : isUsed ? "close" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button
          className="hamburger"
          onClick={() => {
            setIsActive(!isActive);
            setIsUsed(true);
          }}
          onBlur={() => {
            setIsActive(false);
            setIsUsed(true);
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </div>
    </nav>
  );
};
