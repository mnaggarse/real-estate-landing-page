import heroImg from "../assets/hero_luxury_home_1768307206766.png"; // Make sure the filename matches what was generated

export default function Hero() {
  const styles = {
    section: {
      height: "100vh",
      width: "100%",
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${heroImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "0 1rem",
    },
    content: {
      maxWidth: "800px",
      transform: "translateY(0)",
      animation: "fadeInUp 1s ease-out",
    },
    title: {
      fontSize: "clamp(3rem, 5vw, 5rem)",
      fontWeight: "700",
      marginBottom: "1.5rem",
      lineHeight: "1.1",
      textShadow: "0 2px 10px rgba(0,0,0,0.5)",
    },
    subtitle: {
      fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
      marginBottom: "2.5rem",
      color: "#e2e8f0",
      textShadow: "0 1px 5px rgba(0,0,0,0.5)",
    },
    ctaGroup: {
      display: "flex",
      gap: "1rem",
      justifyContent: "center",
    },
  };

  return (
    <section id="hero" style={styles.section}>
      <div style={styles.content}>
        <h1 style={styles.title}>
          Find Your
          <br />
          <span style={{ color: "var(--color-primary)" }}>Dream Home</span>
        </h1>
        <p style={styles.subtitle}>
          Discover exclusive properties in the most desirable locations.
        </p>
        <div style={styles.ctaGroup}>
          <a href="#listings" className="btn btn-primary">
            View Listings
          </a>
          <a
            href="#contact"
            className="btn btn-outline"
            style={{ borderColor: "#fff", color: "#fff" }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
