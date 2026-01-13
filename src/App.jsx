import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Listings from "./components/Listings";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Listings />
      <About />
      <Footer />
    </div>
  );
}
