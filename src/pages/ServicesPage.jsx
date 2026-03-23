import React from "react";
import servicesData from "../data/servicesDetails"; // we'll create this next

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Roofing & Exterior Services</h1>
          <p>
            From roof repair to full replacements, we take care of your home
            with expert service and trusted craftsmanship.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list container">
        {servicesData.map((svc) => (
          <div key={svc.id} className="service-block">
            <div className="service-icon">
              <img src={svc.icon} alt={`${svc.title} icon`} />
            </div>
            <div className="service-content">
              <h2>{svc.title}</h2>
              <p>{svc.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <button className="btn primary">Request a Quote</button>
        </div>
      </section>
    </div>
  );
}