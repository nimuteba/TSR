import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="overlay">
          <h1>Roofing Services You Can Trust</h1>
          <p>Serving homeowners with reliable, professional solutions</p>
          <button>Request Free Inspection</button>
        </div>
      </section>

      {/* LOCAL INTRO */}
      <section className="container">
        <h2>Your Trusted Local Roofing Experts</h2>
        <p>
          Your home is constantly exposed to the elements, and your roof plays
          a critical role in protecting it. Our team understands the challenges
          that weather, time, and wear can bring, and we provide solutions
          designed to keep your home safe and secure.
        </p>
      </section>

      {/* COMMON ISSUES */}
      <section className="container">
        <h2>Common Roofing Issues</h2>
        <div className="grid">
          <div className="card">Storm and wind damage</div>
          <div className="card">Leaks and water intrusion</div>
          <div className="card">Missing or damaged shingles</div>
          <div className="card">Moisture buildup and aging materials</div>
        </div>
      </section>

      {/* WHY PROFESSIONAL */}
      <section className="contact-importance">
        <div className="container">
          <h2>Why Professional Roofing Matters</h2>
          <p>
            Roofing systems require proper tools, training, and experience.
            Professional inspections and repairs help prevent small issues from
            becoming major structural problems, saving you time and money in the
            long run.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container">
        <h2>What to Expect</h2>
        <div className="steps">
          <div>
            <h3>1. Inspection</h3>
            <p>We assess your roof thoroughly, identifying all issues.</p>
          </div>
          <div>
            <h3>2. Recommendation</h3>
            <p>We provide clear, honest guidance on next steps.</p>
          </div>
          <div>
            <h3>3. Service</h3>
            <p>Our team completes repairs or installation efficiently.</p>
          </div>
          <div>
            <h3>4. Follow-up</h3>
            <p>We ensure everything meets our quality standards.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container">
        <h2>Why Choose Us</h2>
        <p>
          With years of experience and a commitment to quality workmanship,
          we’ve built a reputation for reliability and customer satisfaction.
          We focus on clear communication, expert craftsmanship, and long-term results.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="contact-details">
        <div className="container">
          <h2>Contact Us Today</h2>
          <p>Call us or request a free estimate to get started.</p>

          <div className="info-grid">
            <div>
              <h3>Phone</h3>
              <p>(720)538-7992</p>
            </div>

            <div>
              <h3>Email</h3>
              <p>info@thestandardroofing.com</p>
            </div>

            <div>
              <h3>Hours</h3>
              <p>Mon – Fri: 8am – 5pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <h2>Get Started Today</h2>
        <p>Schedule your free inspection now</p>
        <button>Call Now</button>
      </section>

    </div>
  );
}