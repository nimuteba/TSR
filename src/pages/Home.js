import React from "react";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>
            Transform Your Outdoor Living Space
          </h1>

          <p style={styles.heroText}>
            Professional landscape design, patios, lighting, and outdoor
            living environments built to elevate your home.
          </p>

          <button style={styles.ctaButton}>
            Get a Free Consultation
          </button>
        </div>
      </section>


      {/* ABOUT SECTION */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Landscape Design Experts</h2>

        <p style={styles.paragraph}>
          Our team specializes in designing beautiful and functional outdoor
          environments. From elegant patios and gardens to lighting and water
          features, we transform ordinary yards into relaxing outdoor living
          spaces for families and friends.
        </p>
      </section>


      {/* SERVICES PREVIEW */}
      <section style={styles.services}>
        <h2 style={styles.heading}>Our Services</h2>

        <div style={styles.serviceGrid}>

          <div style={styles.serviceCard}>
            <h3>Landscape Design</h3>
            <p>
              Custom landscape designs that combine plants, stonework, and
              outdoor features to create harmonious outdoor spaces.
            </p>
          </div>

          <div style={styles.serviceCard}>
            <h3>Patios & Walkways</h3>
            <p>
              Beautiful stone patios and pathways designed to enhance outdoor
              entertaining and relaxation.
            </p>
          </div>

          <div style={styles.serviceCard}>
            <h3>Outdoor Living</h3>
            <p>
              Pergolas, outdoor kitchens, fire features, and lighting that turn
              your backyard into a destination.
            </p>
          </div>

          <div style={styles.serviceCard}>
            <h3>Landscape Lighting</h3>
            <p>
              LED lighting solutions that highlight your property and extend
              outdoor living well into the evening.
            </p>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section style={styles.ctaSection}>
        <h2>Ready to Create Your Dream Landscape?</h2>

        <p>
          Contact our design team today to schedule a consultation and start
          planning your outdoor transformation.
        </p>

        <button style={styles.ctaButton}>
          Request a Quote
        </button>
      </section>

    </div>
  );
}

export default Home;


/* STYLES */

const styles = {

  hero: {
    height: "70vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1592595896551-12b371d546d5')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  heroOverlay: {
    background: "rgba(0,0,0,0.45)",
    color: "white",
    padding: "60px",
    textAlign: "center",
  },

  heroTitle: {
    fontSize: "48px",
    marginBottom: "20px",
  },

  heroText: {
    fontSize: "18px",
    marginBottom: "30px",
    maxWidth: "600px",
  },

  ctaButton: {
    padding: "14px 28px",
    fontSize: "16px",
    border: "none",
    background: "#2f7d32",
    color: "white",
    cursor: "pointer",
  },

  section: {
    padding: "80px 20px",
    textAlign: "center",
    maxWidth: "900px",
    margin: "auto",
  },

  heading: {
    fontSize: "32px",
    marginBottom: "20px",
  },

  paragraph: {
    fontSize: "18px",
    lineHeight: "1.6",
  },

  services: {
    padding: "80px 20px",
    background: "#f5f5f5",
    textAlign: "center",
  },

  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginTop: "40px",
  },

  serviceCard: {
    background: "white",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  ctaSection: {
    padding: "80px 20px",
    textAlign: "center",
  },
};