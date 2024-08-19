import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="flicker" to="/">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="flicker" to="/Projects">
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
