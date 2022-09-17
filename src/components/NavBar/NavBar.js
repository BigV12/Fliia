import React from "react";
import { useState } from "react";

import "./NavBar.css";
import logo from "./logo.PNG";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <img src={logo} className="logo" alt="image" />
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link now">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Movies
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            News
          </a>
        </li>

        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
