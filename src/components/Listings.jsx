import aptImg from "../assets/house2.png";
import cottageImg from "../assets/house3.png";
import villaImg from "../assets/house4.png";

export default function Listings() {
  const listings = [
    {
      id: 1,
      image: villaImg,
      price: "$5,400,000",
      address: "1092 Palm Avenue, Malibu, CA",
      beds: 5,
      baths: 6,
      sqft: "6,200",
    },
    {
      id: 2,
      image: aptImg,
      price: "$2,850,000",
      address: "405 Skyline Blvd, New York, NY",
      beds: 3,
      baths: 3,
      sqft: "2,400",
    },
    {
      id: 3,
      image: cottageImg,
      price: "$1,200,000",
      address: "77 Meadow Lane, Cotswolds, UK",
      beds: 4,
      baths: 2,
      sqft: "2,100",
    },
  ];

  const styles = {
    section: {
      padding: "var(--spacing-xl) 0",
      backgroundColor: "var(--color-bg)",
    },
    header: {
      textAlign: "center",
      marginBottom: "var(--spacing-xl)",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "var(--spacing-sm)",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
    },
    card: {
      backgroundColor: "var(--color-surface)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    imageContainer: {
      height: "300px",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease",
    },
    details: {
      padding: "1.5rem",
    },
    price: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "var(--color-primary)",
      marginBottom: "0.5rem",
    },
    address: {
      fontSize: "1.1rem",
      marginBottom: "1rem",
      color: "#e2e8f0",
    },
    features: {
      display: "flex",
      gap: "1.5rem",
      color: "var(--color-text-muted)",
      fontSize: "0.9rem",
      borderTop: "1px solid #334155",
      paddingTop: "1rem",
    },
  };

  return (
    <section id="listings" style={styles.section}>
      <div className="container" style={styles.header}>
        <h2 style={styles.title}>Featured Properties</h2>
        <p style={{ color: "var(--color-text-muted)" }}>
          Hand-picked properties for the discerning buyer.
        </p>
      </div>

      <div className="container" style={styles.grid}>
        {listings.map((item) => (
          <div
            key={item.id}
            className="listing-card"
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 20px 25px -5px rgba(0, 0, 0, 0.3)";
              e.currentTarget.querySelector("img").style.transform =
                "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.querySelector("img").style.transform = "scale(1)";
            }}
          >
            <div style={styles.imageContainer}>
              <img src={item.image} alt={item.address} style={styles.image} />
            </div>
            <div style={styles.details}>
              <div style={styles.price}>{item.price}</div>
              <h3 style={styles.address}>{item.address}</h3>
              <div style={styles.features}>
                <span>{item.beds} Beds</span>
                <span>{item.baths} Baths</span>
                <span>{item.sqft} sqft</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
