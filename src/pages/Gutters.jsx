import "./Gutters.css";

export default function Gutters() {
  return (
    <div className="gutters-page">

      {/* HERO */}
      <section className="gutters-hero">
        <div className="overlay">
          <h1>Gutter Installation & Drainage Solutions</h1>
          <p>Protect your home with a properly designed water management system</p>
          <button>Request Free Estimate</button>
        </div>
      </section>

      {/* INTRO */}
      <section className="container">
        <h2>Professional Rain Gutter Installation</h2>
        <p>
          Gutters play a critical role in protecting your home by directing water
          away from your roof and foundation. A properly installed system ensures
          efficient drainage and helps prevent costly structural damage.
        </p>
      </section>

      {/* WHAT GUTTERS DO */}
      <section className="gutters-info container">
        <h2>Why Gutters Matter</h2>
        <div className="grid">
          <div className="card">Prevent foundation damage</div>
          <div className="card">Protect siding and landscaping</div>
          <div className="card">Reduce erosion around your home</div>
          <div className="card">Avoid basement flooding</div>
        </div>
      </section>

      {/* SYSTEM EXPLANATION */}
      <section className="gutters-system">
        <div className="container">
          <h2>Complete Drainage Systems</h2>
          <p>
            A complete gutter system doesn’t just move water off your roof—it
            channels it safely away from your property. Downspouts and underground
            drainage solutions ensure water is directed where it won’t cause harm.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container">
        <h2>Our Gutter Services</h2>
        <div className="grid">
          <div className="card">Seamless gutter installation</div>
          <div className="card">Downspout installation</div>
          <div className="card">Drainage system design</div>
          <div className="card">Gutter repair & replacement</div>
        </div>
      </section>

      {/* CTA */}
      <section className="gutters-cta">
        <h2>Upgrade Your Gutter System Today</h2>
        <p>Get expert recommendations and a free estimate</p>
        <button>Call Now</button>
      </section>

    </div>
  );
}