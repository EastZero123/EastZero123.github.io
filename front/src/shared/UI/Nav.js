import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import NavLinks from "./NavLink";
import "./Nav.css";

const Nav = () => {
  return (
    <React.Fragment>
      <Header>
        <h1 className="main-navigation__title">
          <Link to="/">HOME</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default Nav;
