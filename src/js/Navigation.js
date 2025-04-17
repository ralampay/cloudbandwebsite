import React from "react";
import logo from "../styles/images/logo.png";
import { Navbar } from "react-bootstrap";

export default Navigation = () => {
  return (
    <header className="sticky-top bg-white">
      <Navbar expand="lg" className="bg-body-primary">
        <div className="container-fluid">
          <Navbar.Brand href="#">
            <img src={logo} className="header__logo-img" alt="Cloudband Solutions" height="50" fetchpriority="high"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav main-menu mx-auto">
              <li className="nav-item">
                <a className="nav-link px-lg-4" href="#services">SERVICES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-lg-4" href="#portfolio">PORTFOLIO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-lg-4" href="#about">ABOUT</a>
              </li>
              <li className="nav-item d-block d-md-none">
                <a className="nav-link" href="#contact">CONTACT</a>
              </li>
            </ul>
            <div className="d-none d-md-block">
              <a href="#contact" className="btn btn-accent">GET IN TOUCH</a>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  )
}
