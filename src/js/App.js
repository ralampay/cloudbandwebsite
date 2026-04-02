import React from "react";
import graph from "../styles/images/graph-6249047_1280.png";
import iconEnterprise from "../styles/images/icon-enterprise.svg";
import iconCloud from "../styles/images/icon-cloud.svg";
import iconApp from "../styles/images/icon-app.svg";
import iconSoftware from "../styles/images/icon-software.svg";
import iconDoc from "../styles/images/icon-doc.svg";
import iconSupport from "../styles/images/icon-support.svg";
import logoAndroid from "../styles/images/logo/android.png";
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
import salinLogo from "../styles/images/salin-logo.png";

import Navigation from "./Navigation";
import ContactForm from "./ContactForm";

const serviceItems = [
  {
    icon: iconEnterprise,
    title: "Enterprise System Solutions",
    description:
      "Design and delivery of operational platforms for finance, logistics, healthcare, and other process-heavy businesses.",
  },
  {
    icon: iconCloud,
    title: "Cloud Computing Services",
    description:
      "Migration, hosting, and architecture support for resilient systems that scale cleanly as traffic and teams grow.",
  },
  {
    icon: iconApp,
    title: "Web and Mobile Applications",
    description:
      "Modern product development across responsive web apps, internal tools, and customer-facing mobile experiences.",
  },
  {
    icon: iconSoftware,
    title: "Custom Software Development",
    description:
      "Purpose-built systems shaped around your workflows instead of forcing teams into generic off-the-shelf tools.",
  },
  {
    icon: iconDoc,
    title: "Software Consulting",
    description:
      "Technical discovery, architecture review, and product planning that turns requirements into a clearer delivery path.",
  },
  {
    icon: iconSupport,
    title: "Maintenance and Support",
    description:
      "Long-term support for deployed systems, including monitoring, upgrades, and steady product evolution over time.",
  },
];

const featuredMetrics = [
  { value: "2014", label: "Operating since" },
  { value: "PH + Global", label: "Client reach" },
  { value: "Open Source", label: "Delivery stack" },
];

const portfolioItems = [
  {
    tag: "Enterprise Software Solutions",
    title: "Financial Management System",
    image: fis,
    alt: "Dashboard interface for a financial management system",
    bullets: [
      "Built for cooperatives in the Philippines managing loans, equity, membership accounts, and operational reporting.",
      "Supports daily workflows and decision-making with reporting and business intelligence capabilities.",
      "Designed around real operational needs instead of generic accounting software assumptions.",
    ],
  },
  {
    tag: "Artificial Intelligence",
    title: "AI Powered Utility and Automation",
    image: ai,
    alt: "Artificial intelligence themed project illustration",
    bullets: [
      "Applies AI services to streamline repetitive work and increase operational efficiency.",
      "Improves transaction handling at higher scale without adding manual bottlenecks.",
      "Pairs automation with business insight instead of treating AI as a standalone feature.",
    ],
  },
  {
    tag: "Enterprise Software Solutions",
    title: "Fleet Management System",
    image: fleet,
    alt: "Fleet management dashboard preview",
    bullets: [
      "Manages crew assignments, transmittal records, and certificates for ocean-going vessels.",
      "Provides access for principals and other stakeholders working across vessel operations.",
      "Delivered for Baliwag Navigation Inc. and Merfolk Shipping 13 Corp.",
    ],
  },
  {
    tag: "Custom Software",
    title: "Hospital Management System",
    image: hmis,
    alt: "Hospital management software interface",
    bullets: [
      "Supports hospital operations for rural healthcare providers in the Philippines.",
      "Includes patient management, inventory, laboratory, billing, and room reservation workflows.",
      "Combines clinical and administrative tools in a single operating platform.",
    ],
  },
];

const technologyLogos = [
  { src: logoAndroid, alt: "Android" },
  { src: logoAws, alt: "AWS" },
  { src: logoNewRelic, alt: "New Relic" },
  { src: logoNginx, alt: "NGINX" },
  { src: logoPostgresql, alt: "PostgreSQL" },
  { src: logoPython, alt: "Python" },
  { src: logoRails, alt: "Ruby on Rails" },
  { src: logoReact, alt: "React" },
  { src: logoRedis, alt: "Redis" },
];

function SectionHeader({ eyebrow, title, description, align = "center" }) {
  return (
    <header className={`section-header section-header--${align}`}>
      <p className="section-header__eyebrow">{eyebrow}</p>
      <h2 className="section-header__title">{title}</h2>
      {description ? <p className="section-header__description">{description}</p> : null}
    </header>
  );
}

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <section id="banner" className="hero">
          <div className="container-fluid">
            <div className="hero__panel">
              <div className="row align-items-center g-5">
                <div className="col-xl-6">
                  <p className="hero__eyebrow">Cloudband Solutions Co.</p>
                  <h1 className="hero__title">
                    Crafted Software Solutions
                  </h1>
                  <p className="hero__description">
                    We design, build, and support business-critical platforms for teams that need dependable
                    delivery across enterprise systems, cloud architecture, web products, and automation.
                  </p>
                  <div className="hero__actions">
                    <a href="#portfolio" className="btn btn-primary btn-lg">
                      View Portfolio
                    </a>
                    <a href="#contact" className="btn btn-outline-primary btn-lg">
                      Start a Project
                    </a>
                  </div>
                  <ul className="hero__signals list-unstyled mb-0">
                    <li>Enterprise systems</li>
                    <li>Cloud and infrastructure</li>
                    <li>Web, mobile, and AI tooling</li>
                  </ul>
                </div>
                <div className="col-xl-6">
                  <div className="hero-visual">
                    <div className="hero-visual__badge hero-visual__badge--top">Architecture + Delivery</div>
                    <div className="hero-visual__badge hero-visual__badge--bottom">Long-term Support</div>
                    <div className="laptop">
                      <div className="laptop__screen">
                        <img
                          src={graph}
                          alt="Analytics dashboard preview shown on a laptop screen"
                          className="img-fluid"
                          width="1100"
                          height="520"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-metrics row g-3">
                {featuredMetrics.map((metric) => (
                  <div className="col-md-4" key={metric.label}>
                    <div className="hero-metric">
                      <p className="hero-metric__value">{metric.value}</p>
                      <p className="hero-metric__label">{metric.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section section--soft">
          <div className="container-fluid">
            <SectionHeader
              eyebrow="Services"
              title="A cleaner delivery stack from discovery to support"
              description="Cloudband works across the full software lifecycle, from architecture and custom product development to support for systems already in production."
            />
            <div className="services-grid">
              {serviceItems.map((service) => (
                <article className="service-card" key={service.title}>
                  <figure className="service-card__icon">
                    <img src={service.icon} alt="" />
                  </figure>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__description">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="section">
          <div className="container-fluid">
            <SectionHeader
              eyebrow="Portfolio"
              title="Selected systems delivered for practical, high-stakes workflows"
              description="The work spans accounting, healthcare, logistics, and internal operations, with a bias toward systems that need reliability and long-term maintainability."
            />

            <div className="feature-project">
              <div className="row align-items-center g-0">
                <div className="col-lg-5 feature-project__media">
                  <img src={salinLogo} alt="SALIN product logo" width="791" height="208" className="feature-project__logo img-fluid" />
                </div>
                <div className="col-lg-7 feature-project__content">
                  <p className="project__tag">Deployable customizable products</p>
                  <h3 className="feature-project__title">SALIN</h3>
                  <p className="feature-project__description">
                    A flexible accounting platform designed as a client-ready product with dedicated infrastructure,
                    extensibility, and ongoing consultancy support.
                  </p>
                  <ul className="project__list">
                    <li>Extensible accounting system for day-to-day business operations.</li>
                    <li>Dedicated infrastructure per client with implementation support.</li>
                    <li>Built as a practical foundation, not a one-off prototype.</li>
                  </ul>
                  <hr/>
                  <a
                    href="https://salin.cloudbandsolutions.com/"
                    className="btn btn-primary btn-lg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit SALIN
                  </a>
                </div>
              </div>
            </div>

            <div className="portfolio-grid">
              {portfolioItems.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-card__image-wrap">
                    <img
                      src={project.image}
                      alt={project.alt}
                      width="640"
                      height="360"
                      className="project-card__image img-fluid"
                    />
                  </div>
                  <div className="project-card__body">
                    <p className="project__tag">{project.tag}</p>
                    <h3 className="project-card__title">{project.title}</h3>
                    <ul className="project__list">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--accent">
          <div className="container-fluid">
            <div className="technology-panel">
              <div className="row align-items-center g-4">
                <div className="col-lg-4">
                  <SectionHeader
                    eyebrow="Technology"
                    title="Built on dependable open-source foundations"
                    description="Our delivery stack favors proven technologies that are maintainable, observable, and production-ready."
                    align="left"
                  />
                </div>
                <div className="col-lg-8">
                  <div className="technology-grid">
                    {technologyLogos.map((logo) => (
                      <div className="technology-grid__item" key={logo.alt}>
                        <img src={logo.src} alt={logo.alt} className="img-fluid" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container-fluid">
            <div className="row g-4 align-items-start">
              <div className="col-lg-6">
                <SectionHeader
                  eyebrow="About"
                  title="An engineering partner focused on durable software"
                  description="Cloudband Solutions started in 2014 as an all-Filipino software development company delivering custom systems for organizations that need software aligned with how they actually operate."
                  align="left"
                />
                <div className="about-grid">
                  <article className="info-card">
                    <p className="info-card__label">History</p>
                    <p className="info-card__copy">
                      We build modern software solutions for local and international clients, with delivery rooted in
                      open-source technologies and long-term support.
                    </p>
                  </article>
                  <article className="info-card">
                    <p className="info-card__label">Mission</p>
                    <p className="info-card__copy">
                      Bring practical software into production, maintain it responsibly, and evolve it as business
                      needs change.
                    </p>
                  </article>
                  <article className="info-card">
                    <p className="info-card__label">Working style</p>
                    <p className="info-card__copy">
                      Clear scope, steady implementation, and systems designed to remain useful after launch.
                    </p>
                  </article>
                </div>
              </div>
              <div id="contact" className="col-lg-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container-fluid">
          <p className="mb-0">Copyright &copy; {new Date().getFullYear()} Cloudband Solutions Co. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
