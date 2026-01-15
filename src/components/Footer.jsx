export default function Footer() {
  const styles = {
    footer: {
      backgroundColor: "#020617",
      padding: "4rem 0 2rem",
      color: "var(--color-text-muted)",
      borderTop: "1px solid #1e293b",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "2rem",
      marginBottom: "3rem",
    },
    colTitle: {
      color: "var(--color-text)",
      fontSize: "1.2rem",
      fontWeight: "600",
      marginBottom: "1.5rem",
    },
    linkList: {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
    },
    link: {
      transition: "color 0.2s",
    },
    bottom: {
      textAlign: "center",
      paddingTop: "2rem",
      borderTop: "1px solid #1e293b",
      fontSize: "0.9rem",
    },
  };

  return (
    <footer id="contact" style={styles.footer}>
      <div className="container">
        <div style={styles.grid}>
          <div>
            <h3
              style={{
                ...styles.colTitle,
                color: "var(--color-primary)",
                fontSize: "1.5rem",
              }}
            >
              REAL ESTATE
            </h3>
            <p style={{ maxWidth: "300px" }}>
              Elevating the standard of luxury real estate with unmatched
              service and portfolio.
            </p>
          </div>

          <div>
            <h4 style={styles.colTitle}>Quick Links</h4>
            <ul style={styles.linkList}>
              <li>
                <a href="#hero" style={styles.link}>
                  Home
                </a>
              </li>
              <li>
                <a href="#listings" style={styles.link}>
                  Properties
                </a>
              </li>
              <li>
                <a href="#about" style={styles.link}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" style={styles.link}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={styles.colTitle}>Contact</h4>
            <ul style={styles.linkList}>
              <li>info@realestate.com</li>
              <li>+1 (555) 123-4567</li>
              <li>
                90210 Beverly Hills,
                <br />
                California
              </li>
            </ul>
          </div>

          <div>
            <h4 style={styles.colTitle}>Newsletter</h4>
            <p style={{ marginBottom: "1rem" }}>
              Subscribe for exclusive updates.
            </p>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  padding: "0.75rem",
                  borderRadius: "var(--radius-sm)",
                  border: "none",
                  background: "var(--color-surface)",
                  color: "white",
                  width: "100%",
                }}
              />
              <button className="btn btn-primary">Go</button>
            </div>
          </div>
        </div>

        <div style={styles.bottom}>
          &copy; {new Date().getFullYear()} Real Estate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
