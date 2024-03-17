import React, { useState } from "react";
import logo from "../styles/images/logo.png";

export default App = () => {
  return (
    <React.Fragment>
      <header className="sticky-top bg-white">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            <h1 className="navbar-brand m-0">
              <img src={logo} className="header__logo-img" alt="Cloudband Solutions" height="50" fetchpriority="high"/>
            </h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav main-menu">
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
            </div>
            <div className="d-none d-md-block">
              <a href="#contact" className="btn btn-accent">GET IN TOUCH</a>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section id="banner" className="banner text-center">
          <div className="container">
            <h2 className="banner__copy mx-sm-auto display-3">
              <small className="fw-medium">Coding the Future:</small>
              <br/>
              Innovative Solutions for a Digital World
            </h2>
            <a href="#portfolio" className="btn btn-primary btn-lg mt-4">
              VIEW PORTFOLIO
            </a>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
