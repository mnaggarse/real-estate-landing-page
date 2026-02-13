import heroImg from "../assets/house1.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full relative flex flex-col justify-center items-center pt-[120px] pb-16 px-4 bg-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center brightness-[0.4]"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>
      </div>

      <div className="w-full max-w-[1200px] relative z-10 flex flex-col items-center text-center gap-12">
        <div className="max-w-[900px] mx-auto animate-[fadeInDown_1s_ease-out]">
          <h1 className="text-[clamp(3rem,5vw,5rem)] font-bold mb-6 leading-[1.2] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            Discover a Place <br />
            You'll Love to{" "}
            <span className="text-primary bg-linear-to-tr from-primary to-white bg-clip-text">
              Live in
            </span>
          </h1>
          <p className="text-[clamp(1.1rem,2vw,1.4rem)] text-slate-300 max-w-[700px] mx-auto font-normal">
            Connect with over 10,000+ luxury properties from top-rated agents.
            Your dream home is just a search away.
          </p>
        </div>

        <div className="bg-slate-800/70 backdrop-blur-md border border-white/10 w-full max-w-[1000px] p-6 rounded-2xl flex flex-wrap gap-4 items-end shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-[fadeInUp_1s_ease-out_0.3s_backwards]">
          <div className="flex-auto min-w-[200px] flex flex-col gap-2 text-left">
            <label className="text-primary text-sm font-semibold ml-2">
              Location
            </label>
            <input
              type="text"
              placeholder="City, Neighborhood..."
              className="w-full p-4 rounded-lg border border-white/10 bg-slate-900/60 text-white text-base outline-none transition-all duration-300 focus:border-primary/50"
            />
          </div>
          <div className="flex-auto min-w-[200px] flex flex-col gap-2 text-left">
            <label className="text-primary text-sm font-semibold ml-2">
              Property Type
            </label>
            <select className="w-full p-4 rounded-lg border border-white/10 bg-slate-900/60 text-white text-base outline-none transition-all duration-300 focus:border-primary/50 appearance-none cursor-pointer">
              <option value="any">Any Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="villa">Villa</option>
            </select>
          </div>
          <div className="flex-auto min-w-[200px] flex flex-col gap-2 text-left">
            <label className="text-primary text-sm font-semibold ml-2">
              Price Range
            </label>
            <select className="w-full p-4 rounded-lg border border-white/10 bg-slate-900/60 text-white text-base outline-none transition-all duration-300 focus:border-primary/50 appearance-none cursor-pointer">
              <option value="any">Any Price</option>
              <option value="100k-500k">$100k - $500k</option>
              <option value="500k-1m">$500k - $1M</option>
              <option value="1m+">$1M+</option>
            </select>
          </div>
          <button className="flex-none px-10 h-[58px] bg-primary text-slate-900 border-none rounded-lg text-lg font-bold cursor-pointer transition-all duration-300 hover:bg-[#e6c800] hover:-translate-y-0.5">
            Search
          </button>
        </div>

        <div className="flex gap-12 mt-8 animate-[fadeInUp_1s_ease-out_0.6s_backwards] flex-wrap justify-center">
          <div className="text-center">
            <span className="text-[2.5rem] font-bold text-white block">
              1500+
            </span>
            <span className="text-slate-400 text-base uppercase tracking-wider">
              Properties Ready
            </span>
          </div>
          <div className="text-center">
            <span className="text-[2.5rem] font-bold text-white block">
              500+
            </span>
            <span className="text-slate-400 text-base uppercase tracking-wider">
              Happy Customers
            </span>
          </div>
          <div className="text-center">
            <span className="text-[2.5rem] font-bold text-white block">
              50+
            </span>
            <span className="text-slate-400 text-base uppercase tracking-wider">
              Awards Won
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
