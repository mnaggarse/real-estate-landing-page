import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styles = {
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
      padding: "1rem 0",
      transition: "all 0.3s ease",
      backgroundColor: scrolled ? "rgba(15, 23, 42, 0.9)" : "transparent",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "var(--color-primary)",
      letterSpacing: "1px",
    },
    links: {
      display: "flex",
      gap: "2rem",
    },
    link: {
      color: "var(--color-text)",
      fontWeight: "500",
      transition: "color 0.3s",
    },
    menuBtn: {
      display: "none", // Mobile menu button for later
    },
  };

  return (
    <nav style={styles.nav} className={scrolled ? "glass" : ""}>
      <div className="container" style={styles.container}>
        <a href="#" style={styles.logo}>
          LUXE ESTATE
        </a>
        <ul style={styles.links}>
          <li>
            <a href="#hero" style={styles.link}>
              Home
            </a>
          </li>
          <li>
            <a href="#listings" style={styles.link}>
              Listings
            </a>
          </li>
          <li>
            <a href="#about" style={styles.link}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" style={styles.link}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
