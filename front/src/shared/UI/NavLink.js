import { Link, NavLink } from "react-router-dom";
import "./NavLink.css";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
