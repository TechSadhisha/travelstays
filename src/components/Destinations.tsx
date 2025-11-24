import { useNavigate } from "react-router-dom";
import pondicherry from "@/assets/dest-pondicherry.webp";
import madurai from "@/assets/dest-madurai.webp";
import trichy from "@/assets/dest-trichy.webp";
import varkala from "@/assets/dest-varkala.webp";
import kovalam from "@/assets/dest-kovalam.webp";
import kanyakumari from "@/assets/dest-kanyakumari.webp";

const Destinations = () => {
  const navigate = useNavigate();
  
  // Map destination names to their filter values
  const getDestinationValue = (name: string): string => {
    const mapping: { [key: string]: string } = {
      "Pondicherry": "pondicherry",
      "Madurai": "madurai",
      "Trichy": "trichy",
      "Varkala": "varkala",
      "Kovalam": "kovalam",
      "Kanyakumari": "kanyakumari"
    };
    return mapping[name] || "";
  };

  const handleDestinationClick = (name: string) => {
    const destinationValue = getDestinationValue(name);
    if (destinationValue) {
      navigate(`/allvillas?destination=${destinationValue}`);
    }
  };

  const destinations = [
    { name: "Pondicherry", image: pondicherry },
    { name: "Madurai", image: madurai },
    { name: "Trichy", image: trichy },
    { name: "Varkala", image: varkala },
    { name: "Kovalam", image: kovalam },
    { name: "Kanyakumari", image: kanyakumari }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4 tracking-wide">DESTINATIONS</h2>
          <p className="text-sm sm:text-base text-muted-foreground">Where do you want to spend your next holiday?</p>
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
