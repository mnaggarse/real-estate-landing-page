import interiorImg from "../assets/house5.png";

export default function About() {
  const styles = {
    section: {
      padding: "var(--spacing-xl) 0",
      backgroundColor: "var(--color-surface)",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "4rem",
      alignItems: "center",
    },
    imageContainer: {
      position: "relative",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    },
    image: {
      width: "100%",
      display: "block",
    },
    content: {
      paddingRight: "var(--spacing-lg)",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "1.5rem",
      lineHeight: "1.2",
    },
    text: {
      color: "var(--color-text-muted)",
      marginBottom: "1.5rem",
      fontSize: "1.1rem",
    },
    stats: {
      display: "flex",
      gap: "3rem",
      marginTop: "2rem",
    },
    statItem: {
      display: "flex",
      flexDirection: "column",
    },
    statNumber: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "var(--color-primary)",
    },
    statLabel: {
      color: "var(--color-text-muted)",
      fontSize: "0.9rem",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
  };

  return (
    <section id="about" style={styles.section}>
      <div className="container" style={styles.grid}>
        <div style={styles.imageContainer}>
          <img src={interiorImg} alt="Luxury Interior" style={styles.image} />
        </div>

        <div style={styles.content}>
          <h2 style={styles.title}>
            Redefining{" "}
            <span style={{ color: "var(--color-primary)" }}>Luxury Living</span>
          </h2>
          <p style={styles.text}>
            We specialize in curating the world's most exceptional properties.
            From modern architectural masterpieces to historic estates, our
            portfolio is as unique as our clients.
          </p>
          <p style={styles.text}>
            Our team provides white-glove service, ensuring your journey to
            finding the perfect home is seamless, private, and tailored to your
            lifestyle.
          </p>

          <div style={styles.stats}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>15+</span>
              <span style={styles.statLabel}>Years Experience</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>$2B+</span>
              <span style={styles.statLabel}>Sales Volume</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>300+</span>
              <span style={styles.statLabel}>Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
