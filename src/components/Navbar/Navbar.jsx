import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar";
import * as Icon from "../../utilities/_icons";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink className="nav__link" to={"/"}>
        <Icon.HomeInactive />
      </NavLink>
      <NavLink className="nav__link" to={"recipes"}>
        <Icon.BookmarkInactive />
      </NavLink>
      <NavLink className="nav__link nav__plus" to={"add-recipe"}>
        <Icon.Plus />
      </NavLink>
      <NavLink className="nav__link" to={"about"}>
        <Icon.ProfileInactive />
      </NavLink>
      <NavLink className="nav__link" to={"about"}>
        <Icon.ProfileInactive />
      </NavLink>
    </nav>
  );
};

export default Navbar;
