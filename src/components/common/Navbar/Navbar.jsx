import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="flicker" to="/">About</NavLink>
        </li>
        <li>
          <NavLink className="flicker" to="/Projects">Projects</NavLink>
        </li>
        <li>
          <NavLink className="flicker" to="/Skills">Skills</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
