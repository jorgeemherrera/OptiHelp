import React from "react";
import './navbar.scss'
import logo from '../assets/images/logo-optihelp.png'

const Navbar = () => {
  return (
    <nav className="navigation">
      <img alt="" src={logo} />
      <a href="/" className="brand-name">
       Cuidado y protección para tu salud visual
      </a>
    </nav>
  );
}

export { Navbar }