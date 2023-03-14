import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul className="nav_survivors">
        <li>
          <NavLink to="/survivors" end className="link_nav">
            Survivants
          </NavLink>
        </li>
        <li>
          <NavLink to="/perks-survivors" end className="link_nav">
            Perks Survivants
          </NavLink>
        </li>
      </ul>
      <h1>
        <NavLink to="/" end>
          Dead By Daylight
        </NavLink>
      </h1>
      <ul className="nav_killers">
        <li>
          <NavLink to="/killers" end className="link_nav">
            Killers
          </NavLink>
        </li>
        <li>
          <NavLink to="/perks-killers" end className="link_nav">
            Perks Killers
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
