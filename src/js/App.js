import React, { useState } from "react";
import graph from "../styles/images/graph-6249047_1280.png";
import iconEnterprise from "../styles/images/icon-enterprise.svg";
import iconCloud from "../styles/images/icon-cloud.svg";
import iconApp from "../styles/images/icon-app.svg";
import iconSoftware from "../styles/images/icon-software.svg";
import iconDoc from "../styles/images/icon-doc.svg";
import iconSupport from "../styles/images/icon-support.svg";
import logoAndroid from"../styles/images/logo/android.png";
import logoAws from "../styles/images/logo/aws.png";
import logoNewRelic from "../styles/images/logo/new-relic.png";
import logoNginx from "../styles/images/logo/nginx.png";
import logoPostgresql from "../styles/images/logo/postgresql.png";
import logoPython from "../styles/images/logo/python.png";
import logoRails from "../styles/images/logo/rails.png";
import logoReact from "../styles/images/logo/react.png";
import logoRedis from "../styles/images/logo/redis.png";
import fis from "../styles/images/fis.jpg";
import fleet from "../styles/images/fleet.jpg";
import ai from "../styles/images/ai.jpg";
import hmis from "../styles/images/hmis.jpg";

import Navigation from "./Navigation";
import ContactForm from "./ContactForm";

export default App = () => {
  return (
    <React.Fragment>
      <Navigation/>
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
          <div className="container--img d-grid align-items-center justify-content-center mx-auto position-relative mt-5">
            <div className="popover popover--left d-none d-md-grid">
              <span className="popover__text">Custom Software Development</span>
              <span className="popover__text">Cloud Computing Services</span>
              <span className="popover__text">Web &amp; Mobile Application</span>
            </div>
            <div className="laptop">
              <div className="laptop__screen">
                <img src={graph} alt="" className="img-fluid" width="1100" height="520"/>
              </div>
            </div>
            <div className="popover popover--right d-none d-md-grid">
              <span className="popover__text">Enterprise Software Systems</span>
              <span className="popover__text">Cloud Computing Services</span>
              <span className="popover__text">Maintenance &amp; Support</span>
            </div>
          </div>
        </section>
        <section id="services" className="services pt-5">
          <header className="text-center mx-auto mb-5 w-75">
            <div className="container-fluid">
              <p className="fw-medium text-primary">
                SERVICES
              </p>
              <h2 className="text-center fw-bolder display-5">
                Crafting Tailored Solutions for Digital Excellence
              </h2>
            </div>
          </header>
          <div className="container-fluid">
            <div className="container--services d-grid justify-content-center">
              <div className="card card--services shadow-sm border-3 border-start-0 border-end-0 border-bottom-0 border-primary">
                <div className="card-body">
                  <figure className="card-img rounded-circle center-items">
                    <img src={iconEnterprise} alt=""/>
                  </figure>
                  <h5 className="card-title mb-3">
                    Enterprise System Solutions
                  </h5>
                  <p className="card-text">
                    Streamlining operations with custom software tailored for large-scale businesses and seamless integration.
                  </p>
                </div>
              </div>
              <div className="card card--services shadow-sm border-3 border-start-0 border-end-0 border-bottom-0 border-primary">
                <div className="card-body">
                  <figure className="card-img rounded-circle center-items">
                    <img src={iconCloud} alt=""/>
                  </figure>
                  <h5 className="card-title mb-3">
                    Cloud Computing Services
                  </h5>
                  <p className="card-text">
                    Cloud-based application development and migration, specializing in IaaS and PaaS solutions for scalability.
                  </p>
                </div>
              </div>
              <div className="card card--services shadow-sm border-3 border-start-0 border-end-0 border-bottom-0 border-primary">
                <div className="card-body">
                  <figure className="card-img rounded-circle center-items">
                    <img src={iconApp} alt=""/>
                  </figure>
                  <h5 className="card-title mb-3">
                    Web &amp; Mobile App
                  </h5>
                  <p className="card-text">
                    Crafting dynamic and responsive web applications with expertise in both front-end and back-end development.
                  </p>
                </div>
              </div>
              <div className="card card--services shadow-sm border-3 border-start-0 border-end-0 border-bottom-0 border-primary">
                <div className="card-body">
                  <figure className="card-img rounded-circle center-items">
                    <img src={iconSoftware} alt=""/>
                  </figure>
                  <h5 className="card-title mb-3">
                    Custom Software Development
                  </h5>
                  <p className="card-text">
                    Cloud-based application development and migration, specializing in IaaS and PaaS solutions for scalability.
                  </p>
                </div>
              </div>
              <div className="card card--services shadow-sm border-3 border-start-0 border-end-0 border-bottom-0 border-primary">
                <div className="card-body">
                  <figure className="card-img rounded-circle center-items">
                    <img src={iconDoc} alt=""/>
                  </figure>
                  <h5 className="card-title mb-3">
                    Software Consulting
                  </h5>
                  <p className="card-text">
                    Strategic guidance and feasibility studies, offering insights to navigate the dynamic technology landscape.
                  </p>
                </div>
              </div>
              <div className="card card--services shadow-sm border-3 border-start-0 border-end-0 border-bottom-0 border-primary">
                <div className="card-body">
                  <figure className="card-img rounded-circle center-items">
                    <img src={iconSupport} alt=""/>
                  </figure>
                  <h5 className="card-title mb-3">
                    Maintenance &amp; Support
                  </h5>
                  <p className="card-text">
                    Streamlining operations with custom software tailored for large-scale businesses and seamless integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="portfolio py-5 mt-5">
          <header className="text-center mx-auto mb-5 w-75">
            <div className="container-fluid">
              <p className="fw-medium text-primary">PORTFOLIO</p>
              <h2 className="text-center fw-bolder display-5">Transformative Technologies in Action</h2>
            </div>
          </header>
          <div className="container--portfolio">
            <div className="project border-bottom border-primary">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-6 bg-primary text-center py-5 align-self-stretch d-flex align-items-center justify-content-center">
                    <img src={fis} alt="" width="640" height="360" className="project__img img-fluid rounded"/>
                  </div>
                  <div className="col-lg-6 ps-lg-5 py-4">
                    <p className="project__tag">Enterprise Software Solutions</p>
                    <h3 className="project__title mb-4">Financial Management System</h3>
                    <div className="project__copy">
                      <ul>
                        <li>Financial Management System catering cooperatives in the Philippines</li>
                        <li>Allows cooperatives to manage loans, equity, membership accounts and provide comprehensive reports for decision making</li>
                        <li>Business intelligence at its core</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project border-bottom border-primary">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-6 bg-primary text-center py-5 align-self-stretch d-flex align-items-center justify-content-center">
                    <img src={ai} alt="" width="640" height="360" className="project__img img-fluid rounded shadow-sm"/>
                  </div>
                  <div className="col-lg-6 ps-lg-5 py-4">
                    <p className="project__tag">Artificial Intelligence</p>
                    <h3 className="project__title mb-4">AI Powered Utility and Automation</h3>
                    <div className="project__copy">
                      <ul>
                        <li>
                          Enabling businesses to take advantage of AI services for increasing operational efficiency.
                        </li>
                        <li>
                          Allowing faster transaction processing at large scale volumes.
                        </li>
                        <li>
                          Business intelligence at its core
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project border-bottom border-primary">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-6 bg-primary text-center py-5 align-self-stretch d-flex align-items-center justify-content-center">
                    <img src={fleet} alt="" width="640" height="360" className="project__img img-fluid rounded shadow-sm"/>
                  </div>
                  <div className="col-lg-6 ps-lg-5 py-4">
                    <p className="project__tag">Enterprise Software Solutions</p>
                    <h3 className="project__title mb-4">Fleet Management System</h3>
                    <div className="project__copy">
                      <ul>
                        <li>
                          Manage crew for ocean going vessels
                        </li>
                        <li>
                          Create transmittal records for onboard and disembarking crew
                        </li>
                        <li>
                          Repository for crew certificates and licenses
                        </li>
                        <li>
                          Allows access to principals and other stakeholders
                        </li>
                        <li>
                          Clients: Baliwag Navigation Inc. and Merfolk Shipping 13 Corp.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-6 bg-primary text-center py-5 align-self-stretch d-flex align-items-center justify-content-center">
                    <img src={hmis} alt="" width="640" height="360" className="project__img img-fluid rounded shadow-sm"/>
                  </div>
                  <div className="col-lg-6 ps-lg-5 py-4">
                    <p className="project__tag">Custom Software</p>
                    <h3 className="project__title mb-4">Hospital Management System</h3>
                    <div className="project__copy">
                      <ul>
                        <li>
                          Administration of hospital operations for rural areas in the Philippines
                        </li>
                        <li>
                          Patient Management, Inventory, Laboratory, Billing, In-patient, Out-patient Room reservation modules
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="open-source pb-5 text-center">
          <div className="container-fluid">
            <p className="h3 fw-bold">Made with Open-Source Technologies</p>
            <ul className="list-inline mt-4">
              <li className="list-inline-item m-3"><img src={logoAndroid} alt="" className="img-fluid"/></li>
              <li className="list-inline-item m-3"><img src="" alt="" className="img-fluid"/></li>
              <li className="list-inline-item m-3"><img src={logoAws} alt="" className="img-fluid"/></li>
              <li className="list-inline-item m-3"><img src={logoNewRelic} alt="" className="img-fluid"/></li>
              <li className="list-inline-item m-3"><img src={logoNginx} alt="" className="img-fluid"/></li>
              <li className="list-inline-item m-3"><img src={logoPostgresql} alt="" className="img-fluid"/></li>
              <li className="list-inline-item m-3"><img src={logoPython} alt="" className="img-fluid"/></li>
              <li className="list-inline-item m-3"><img src={logoRails} alt="" className="img-fluid"/></li>
              <li className="list-inline-item m-3"><img src={logoReact} alt="" className="img-fluid"/></li>
              <li className="list-inline-item m-3"><img src={logoRedis} alt="" className="img-fluid"/></li>
            </ul>
          </div>
        </section>
        <section id="about" className="about py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="fw-bolder mb-5">About Cloudband Solutions</h2>
                <div className="card shadow-sm p-3">
                  <div className="card-body">
                    <h3 className="card-title mb-3 h4">History</h3>
                    <p className="card-text">
                      Started in 2014, Cloudband Solutions Co. prides itself in being an all Filipino software development company that leverages open source technology to provide custom quality software solutions to various companies around the world.
                    </p>
                  </div>
                </div>
                <div className="card shadow-sm mt-4 p-3">
                  <div className="card-body">
                    <h3 className="card-title mb-3 h4">Mission Statement</h3>
                    <p className="card-text">
                      The company's primary mission is to bring modern software solutions for the modern world, maintaining and supporting it as well as evolving its products and services over time.
                    </p>
                  </div>
                </div>
              </div>
              <div id="contact" className="col-lg-6 mt-5 mt-lg-0">
                <ContactForm/>
              </div>
            </div>
          </div>
        </section>
      </main>
      <hr className="mb-0"/>
      <footer className="py-3 text-center small text-dark opacity-50">
        Copyright &copy; 2024. All Rights Reserved. Cloudband Solutions.
      </footer>
    </React.Fragment>
  );
}
