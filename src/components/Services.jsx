import React from "react";
import services from "../data/services";

export default function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.id} className="service-card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}