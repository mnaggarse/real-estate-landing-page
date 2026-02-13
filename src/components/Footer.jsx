export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#020617] py-16 text-slate-400 border-t border-slate-800"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-primary text-2xl font-semibold mb-6">
              REAL ESTATE
            </h3>
            <p className="max-w-[300px]">
              Elevating the standard of luxury real estate with unmatched
              service and portfolio.
            </p>
          </div>

          <div>
            <h4 className="text-slate-50 text-xl font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#listings"
                  className="hover:text-white transition-colors"
                >
                  Properties
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-50 text-xl font-semibold mb-6">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
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
            <h4 className="text-slate-50 text-xl font-semibold mb-6">
              Newsletter
            </h4>
            <p className="mb-4">Subscribe for exclusive updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="p-3 rounded-lg border-none bg-slate-800 text-white w-full outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-[#e6c800] transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-slate-800 text-sm">
          &copy; {new Date().getFullYear()} Real Estate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
