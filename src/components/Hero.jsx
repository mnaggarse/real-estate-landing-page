import heroImg from "../assets/house1.png";

export default function Hero() {
  const styles = {
    section: {
      minHeight: "100vh",
      width: "100%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "120px 1rem 4rem",
      backgroundColor: "#0f172a",
      overflow: "hidden",
    },
    bgContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
    },
    bgImage: {
      width: "100%",
      height: "100%",
      backgroundImage: `url(${heroImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      // Reduced blur for better visibility, darker overlay
      filter: "brightness(0.4)",
    },
    content: {
      width: "100%",
      maxWidth: "1200px",
      position: "relative",
      zIndex: 10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "3rem",
    },
    textGroup: {
      maxWidth: "900px",
      margin: "0 auto",
      animation: "fadeInDown 1s ease-out",
    },
    title: {
      fontSize: "clamp(3rem, 5vw, 5rem)",
      fontWeight: "800",
      marginBottom: "1.5rem",
      lineHeight: "1.2",
      color: "#fff",
      textShadow: "0 4px 20px rgba(0,0,0,0.3)",
    },
    highlight: {
      color: "var(--color-primary)",
      backgroundImage: "linear-gradient(45deg, var(--color-primary), #fff)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subtitle: {
      fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
      color: "#cbd5e1",
      maxWidth: "700px",
      margin: "0 auto",
      fontWeight: "400",
    },
    searchContainer: {
      width: "100%",
      maxWidth: "1000px",
      padding: "1.5rem",
      borderRadius: "var(--radius-lg)",
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem",
      alignItems: "end",
      boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      animation: "fadeInUp 1s ease-out 0.3s backwards",
    },
    inputGroup: {
      flex: "1 1 200px",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      textAlign: "left",
    },
    label: {
      color: "var(--color-primary)",
      fontSize: "0.9rem",
      fontWeight: "600",
      marginLeft: "0.5rem",
    },
    input: {
      width: "100%",
      padding: "1rem 1.25rem",
      borderRadius: "var(--radius-sm)",
      border: "1px solid rgba(255,255,255,0.1)",
      backgroundColor: "rgba(15, 23, 42, 0.6)",
      color: "#fff",
      fontSize: "1rem",
      outline: "none",
      transition: "all 0.3s",
    },
    searchBtn: {
      flex: "0 0 auto",
      padding: "1rem 2.5rem",
      backgroundColor: "var(--color-primary)",
      color: "#0f172a",
      border: "none",
      borderRadius: "var(--radius-sm)",
      fontSize: "1.1rem",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.3s",
      height: "54px", // match input height roughly
    },
    statsContainer: {
      display: "flex",
      gap: "3rem",
      marginTop: "2rem",
      animation: "fadeInUp 1s ease-out 0.6s backwards",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    statItem: {
      textAlign: "center",
    },
    statValue: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#fff",
      display: "block",
    },
    statLabel: {
      color: "var(--color-text-muted)",
      fontSize: "1rem",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
  };

  return (
    <section id="hero" style={styles.section}>
      <div style={styles.bgContainer}>
        <div style={styles.bgImage}></div>
      </div>

      <div style={styles.content}>
        <div style={styles.textGroup}>
          <h1 style={styles.title}>
            Discover a Place <br />
            You'll Love to <span style={styles.highlight}>Live in</span>
          </h1>
          <p style={styles.subtitle}>
            Connect with over 10,000+ luxury properties from top-rated agents.
            Your dream home is just a search away.
          </p>
        </div>

        <div className="glass" style={styles.searchContainer}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Location</label>
            <input
              type="text"
              placeholder="City, Neighborhood..."
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Property Type</label>
            <select style={styles.input}>
              <option value="any">Any Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="villa">Villa</option>
            </select>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Price Range</label>
            <select style={styles.input}>
              <option value="any">Any Price</option>
              <option value="100k-500k">$100k - $500k</option>
              <option value="500k-1m">$500k - $1M</option>
              <option value="1m+">$1M+</option>
            </select>
          </div>
          <button style={styles.searchBtn} className="btn-primary">
            Search
          </button>
        </div>

        <div style={styles.statsContainer}>
          <div style={styles.statItem}>
            <span style={styles.statValue}>1500+</span>
            <span style={styles.statLabel}>Properties Ready</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statValue}>500+</span>
            <span style={styles.statLabel}>Happy Customers</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statValue}>50+</span>
            <span style={styles.statLabel}>Awards Won</span>
          </div>
        </div>
      </div>
    </section>
  );
}
