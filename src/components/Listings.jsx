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

  return (
    <section id="listings" className="py-32 bg-slate-900">
      <div className="max-w-[1200px] mx-auto px-4 text-center mb-16">
        <h2 className="text-[2.5rem] mb-2 font-bold text-white">
          Featured Properties
        </h2>
        <p className="text-slate-400">
          Hand-picked properties for the discerning buyer.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((item) => (
          <div
            key={item.id}
            className="bg-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer"
          >
            <div className="h-[300px] overflow-hidden">
              <img
                src={item.image}
                alt={item.address}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">
                {item.price}
              </div>
              <h3 className="text-lg mb-4 text-slate-200">{item.address}</h3>
              <div className="flex gap-6 text-slate-400 text-sm border-t border-slate-700 pt-4">
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
