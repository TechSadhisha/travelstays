import { useNavigate } from "react-router-dom";
const heroImage =
  "https://res.cloudinary.com/drauz5jps/image/upload/v1764415598/travel_stays_assets/bg.webp";
import { SearchBar } from "@/components/SearchBar";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleSearch = ({
    location,
    date,
    guests,
  }: {
    location: string;
    date?: { from?: Date; to?: Date };
    guests: { adults: number; children: number; rooms: number };
  }) => {
    const params = new URLSearchParams();
    if (location.trim()) params.set("search", location.trim());
    if (date?.from) params.set("from", date.from.toISOString());
    if (date?.to) params.set("to", date.to.toISOString());
    params.set("adults", guests.adults.toString());
    params.set("children", guests.children.toString());
    params.set("rooms", guests.rooms.toString());

    navigate(`/allvillas?${params.toString()}`);
  };

  return (
    <section className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
        {/* Search Bar Container */}
        <SearchBar onSearch={handleSearch} />
      </div>
    </section>
  );
};

export default HeroSection;
