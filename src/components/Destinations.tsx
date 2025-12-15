import { useNavigate } from "react-router-dom";
const pondicherry =
  "https://res.cloudinary.com/drauz5jps/image/upload/v1764415602/travel_stays_assets/dest-pondicherry.webp";
const madurai =
  "https://res.cloudinary.com/drauz5jps/image/upload/v1764415601/travel_stays_assets/dest-madurai.webp";
const trichy =
  "https://res.cloudinary.com/drauz5jps/image/upload/v1764415604/travel_stays_assets/dest-trichy.webp";
const varkala =
  "https://res.cloudinary.com/drauz5jps/image/upload/v1764415605/travel_stays_assets/dest-varkala.webp";
const kovalam =
  "https://res.cloudinary.com/drauz5jps/image/upload/v1764415600/travel_stays_assets/dest-kovalam.webp";
const kanyakumari =
  "https://res.cloudinary.com/drauz5jps/image/upload/v1764415599/travel_stays_assets/dest-kanyakumari.webp";

const Destinations = () => {
  const navigate = useNavigate();

  // Map destination names to their filter values
  const getDestinationValue = (name: string): string => {
    const mapping: { [key: string]: string } = {
      Chennai: "chennai",
      Puducherry: "pondicherry",
      Madurai: "madurai",
      Kochi: "kochi",
      "Trivandrum (Thiruvananthapuram)": "thiruvananthapuram",
      Munnar: "munnar",
    };
    return mapping[name] || "";
  };

  const handleDestinationClick = (name: string) => {
    const destinationValue = getDestinationValue(name);
    if (destinationValue) {
      navigate(`/allstays?destination=${destinationValue}`);
    }
  };

  const destinations = [
    {
      name: "Chennai",
      image:
        "https://res.cloudinary.com/drauz5jps/image/upload/v1765626726/travel_stays_assets/Chennai/Luxury/ITC_Grand_Chola/628286164.jpg",
    },
    { name: "Puducherry", image: pondicherry },
    { name: "Madurai", image: madurai },
    {
      name: "Kochi",
      image:
        "https://res.cloudinary.com/drauz5jps/image/upload/v1765535190/travel_stays_assets/Kochi/Luxury/Taj%20Gateway/2025-05-02%20%281%29.webp",
    },
    {
      name: "Trivandrum (Thiruvananthapuram)",
      image:
        "https://res.cloudinary.com/drauz5jps/image/upload/v1765535499/travel_stays_assets/Thiruvananthapuram/Luxury/Dimora%20Thiruvananthapuram/98623887.jpg",
    },
    {
      name: "Munnar",
      image:
        "https://res.cloudinary.com/drauz5jps/image/upload/v1765535361/travel_stays_assets/munnar/budget%20munnar/Hotel%20Prasanth%20Paradise/2024-05-21.webp",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4 tracking-wide">
            DESTINATIONS
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Where do you want to spend your next holiday?
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {destinations.map((dest, index) => (
            <div
              key={index}
              onClick={() => handleDestinationClick(dest.name)}
              className="relative overflow-hidden rounded-lg aspect-video group cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 sm:p-6 md:p-8">
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-light tracking-wide drop-shadow-lg">
                  {dest.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
