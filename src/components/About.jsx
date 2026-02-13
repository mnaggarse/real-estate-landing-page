import interiorImg from "../assets/house5.png";

export default function About() {
  return (
    <section id="about" className="py-32 bg-slate-800">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
          <img
            src={interiorImg}
            alt="Luxury Interior"
            className="w-full block"
          />
        </div>

        <div className="pr-0 md:pr-8">
          <h2 className="text-[2.5rem] mb-6 leading-[1.2] text-white">
            Redefining <span className="text-primary">Luxury Living</span>
          </h2>
          <p className="text-slate-400 mb-6 text-[1.1rem]">
            We specialize in curating the world's most exceptional properties.
            From modern architectural masterpieces to historic estates, our
            portfolio is as unique as our clients.
          </p>
          <p className="text-slate-400 mb-6 text-[1.1rem]">
            Our team provides white-glove service, ensuring your journey to
            finding the perfect home is seamless, private, and tailored to your
            lifestyle.
          </p>

          <div className="flex gap-12 mt-8">
            <div className="flex flex-col">
              <span className="text-[2.5rem] font-bold text-primary">
                15+
              </span>
              <span className="text-slate-400 text-sm uppercase tracking-wider">
                Years Experience
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[2.5rem] font-bold text-primary">
                $2B+
              </span>
              <span className="text-slate-400 text-sm uppercase tracking-wider">
                Sales Volume
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[2.5rem] font-bold text-primary">
                300+
              </span>
              <span className="text-slate-400 text-sm uppercase tracking-wider">
                Happy Clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
