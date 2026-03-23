import "./About.css";

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="overlay">
          <h1>About Kirsch Roofing</h1>
          <p>Built on craftsmanship, trust, and lasting relationships</p>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="container">
        <h2>Our Story</h2>
        <p>
          What started as a small, hands-on operation has grown into a trusted
          name in roofing. From day one, our goal has been simple: deliver
          quality work that homeowners can rely on for years to come.
        </p>
        <p>
          We believe roofing isn’t just about materials — it’s about protecting
          families, homes, and investments. Every project we take on reflects
          that responsibility.
        </p>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            To provide dependable roofing solutions with integrity, precision,
            and a commitment to long-term value. We aim to make every customer
            feel confident, informed, and protected.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="container">
        <h2>What Drives Us</h2>
        <div className="grid">
          <div className="card">
            <h3>Craftsmanship</h3>
            <p>
              We take pride in doing the job right the first time, using proven
              techniques and high-quality materials.
            </p>
          </div>

          <div className="card">
            <h3>Integrity</h3>
            <p>
              Honest recommendations and transparent communication are at the
              core of everything we do.
            </p>
          </div>

          <div className="card">
            <h3>Reliability</h3>
            <p>
              When you call us, you can count on timely service and dependable
              results.
            </p>
          </div>

          <div className="card">
            <h3>Customer First</h3>
            <p>
              Your satisfaction and peace of mind guide every decision we make.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM / CRAFT */}
      <section className="about-team">
        <div className="container">
          <h2>Built by People Who Care</h2>
          <p>
            Our team is made up of skilled professionals who care deeply about
            their work. From inspection to completion, we focus on detail,
            safety, and long-lasting results.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Work With a Team You Can Trust</h2>
        <p>Let’s talk about your roofing needs today</p>
        <button>Contact Us</button>
      </section>

    </div>
  );
}