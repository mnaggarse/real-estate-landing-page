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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary tracking-wide">
          REAL ESTATE
        </a>
        <ul className="flex gap-8">
          <li>
            <a
              href="#hero"
              className="text-slate-50 font-medium hover:text-primary transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#listings"
              className="text-slate-50 font-medium hover:text-primary transition-colors"
            >
              Listings
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-slate-50 font-medium hover:text-primary transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-slate-50 font-medium hover:text-primary transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
