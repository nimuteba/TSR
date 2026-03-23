import "./Roofing.css";

export default function Roofing() {
  return (
    <div className="roofing-page">

      {/* HERO */}
      <section className="roofing-hero">
        <div className="overlay">
          <h1>Roof Repair Services</h1>
          <p>Fast, reliable, and professional roofing solutions you can trust</p>
          <button>Request Free Inspection</button>
        </div>
      </section>

      {/* INTRO */}
      <section className="roofing-intro container">
        <h2>Prompt and Reliable Roofing Repairs</h2>
        <p>
          If you suspect roof damage, don’t wait. Even minor issues can quickly
          turn into costly repairs. Our team provides thorough inspections and
          expert recommendations to keep your home protected year-round.
        </p>
      </section>

      {/* SIGNS */}
      <section className="roofing-signs container">
        <h2>Signs Your Roof Needs Repair</h2>
        <div className="grid">
          <div className="card">Missing shingles or bare spots</div>
          <div className="card">Water stains on ceilings or walls</div>
          <div className="card">Hail or storm damage</div>
          <div className="card">Damaged flashing or vents</div>
          <div className="card">Shingle debris in gutters</div>
        </div>
      </section>

      {/* IMPORTANCE */}
      <section className="roofing-importance">
        <div className="container">
          <h2>Why Timely Repairs Matter</h2>
          <p>
            Addressing roof issues early prevents structural damage, mold growth,
            and expensive replacements. Small repairs today can extend the life
            of your roof and protect your investment.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="roofing-process container">
        <h2>What to Expect</h2>
        <div className="steps">
          <div>
            <h3>1. Inspection</h3>
            <p>We assess damage using modern tools and expert evaluation.</p>
          </div>
          <div>
            <h3>2. Diagnosis</h3>
            <p>We explain the issue and recommend the best solution.</p>
          </div>
          <div>
            <h3>3. Repair</h3>
            <p>We fix the problem efficiently and restore your roof.</p>
          </div>
          <div>
            <h3>4. Cleanup</h3>
            <p>Your property is left clean and protected.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="roofing-cta">
        <h2>Need Roof Repairs?</h2>
        <p>Get a free inspection and expert advice today.</p>
        <button>Call Now</button>
      </section>

    </div>
  );
}