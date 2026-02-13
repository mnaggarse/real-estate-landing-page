import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu when clicking a link
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 bg-slate-900/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-primary tracking-wide relative z-50"
        >
          REAL ESTATE
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {["Home", "Listings", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-slate-50 font-medium hover:text-primary transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Overlay Menu */}
        <div
          className={`fixed inset-0 h-screen bg-slate-900 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${
            isOpen
              ? "opacity-100 pointer-events-auto touch-none"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-8 text-center">
            {["Home", "Listings", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-bold text-white hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
