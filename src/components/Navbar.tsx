import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
export const Navbar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <nav className="nav_bar">
      <div className="nav_bar_border">
        <div className="logo">My Portfolio</div>
        <button className="hamburger" onClick={() => setIsActive(!isActive)}>
          <GiHamburgerMenu />
        </button>
        <ul className={isActive ? "navigators active" : "navigators"}>
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
