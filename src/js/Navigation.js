import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../styles/images/logo.png";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
];

export default function Navigation() {
  return (
    <header className="site-header sticky-top">
      <Navbar expand="lg" className="site-nav">
        <div className="container-fluid">
          <Navbar.Brand href="#banner" className="site-nav__brand">
            <img
              src={logo}
              className="header__logo-img"
              alt="Cloudband Solutions"
              height="50"
              fetchPriority="high"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="primary-navigation" />
          <Navbar.Collapse id="primary-navigation">
            <ul className="navbar-nav main-menu mx-auto">
              {navItems.map((item) => (
                <li className="nav-item" key={item.href}>
                  <a className="nav-link px-lg-4" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="nav-item d-lg-none">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <a href="#contact" className="btn btn-primary d-none d-lg-inline-flex">
              Get in Touch
            </a>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}
