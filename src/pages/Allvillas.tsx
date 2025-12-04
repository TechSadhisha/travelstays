import { useState, useEffect, useRef, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchBar } from "@/components/SearchBar";
import { FilterSidebar } from "@/components/FilterSidebar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import { allProperties, parsePrice } from "@/data/properties";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
const pondicherryImage =
  "https://res.cloudinary.com/drauz5jps/image/upload/v1764415602/travel_stays_assets/dest-pondicherry.webp";
const maduraiImage =
  "https://res.cloudinary.com/drauz5jps/image/upload/v1764415601/travel_stays_assets/dest-madurai.webp";
const trichyImage =
  "https://res.cloudinary.com/drauz5jps/image/upload/v1764415604/travel_stays_assets/dest-trichy.webp";
const varkalaImage =
  "https://res.cloudinary.com/drauz5jps/image/upload/v1764415605/travel_stays_assets/dest-varkala.webp";
const kovalamImage =
  "https://res.cloudinary.com/drauz5jps/image/upload/v1764415600/travel_stays_assets/dest-kovalam.webp";
const kanyakumariImage =
  "https://res.cloudinary.com/drauz5jps/image/upload/v1764415599/travel_stays_assets/dest-kanyakumari.webp";

// Destination mapping for dynamic hero section
const destinationMap: Record<string, { name: string; image: string }> = {
  pondicherry: {
    name: "Pondicherry",
    image: pondicherryImage,
  },
  madurai: {
    name: "Madurai",
    image: maduraiImage,
  },
  trichy: {
    name: "Trichy",
    image: trichyImage,
  },
  varkala: {
    name: "Varkala",
    image: varkalaImage,
  },
  kovalam: {
    name: "Kovalam",
    image: kovalamImage,
  },
  kanyakumari: {
    name: "Kanyakumari",
    image: kanyakumariImage,
  },
};

const Allvillas = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [destination, setDestination] = useState("all");
  const [bedrooms, setBedrooms] = useState("all");
  const [guests, setGuests] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [displayCount, setDisplayCount] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedTiers, setSelectedTiers] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const isInitialMount = useRef(true);

  // Read query parameters on mount and when they change
  useEffect(() => {
    const destinationParam = searchParams.get("destination");
    const bedroomsParam = searchParams.get("bedrooms");
    const searchParam = searchParams.get("search");
    const adultsParam = searchParams.get("adults");
    const childrenParam = searchParams.get("children");
    const roomsParam = searchParams.get("rooms");

    if (destinationParam) {
      setDestination(destinationParam);
    }

    // Map rooms param to bedrooms filter
    if (roomsParam) {
      setBedrooms(roomsParam);
    } else if (bedroomsParam) {
      setBedrooms(bedroomsParam);
    }

    // Map adults + children to guests filter
    if (adultsParam || childrenParam) {
      const totalGuests =
        parseInt(adultsParam || "0") + parseInt(childrenParam || "0");
      if (totalGuests > 0) setGuests(totalGuests.toString());
    } else if (searchParams.get("guests")) {
      setGuests(searchParams.get("guests")!);
    }

    if (searchParam) {
      setSearchQuery(searchParam);
    }

    // Scroll to top on initial mount if query parameters are present
    if (
      isInitialMount.current &&
      (destinationParam ||
        bedroomsParam ||
        searchParam ||
        adultsParam ||
        roomsParam)
    ) {
      window.scrollTo(0, 0);
      isInitialMount.current = false;
    }
  }, [searchParams]);

  const handleClear = () => {
    setDestination("all");
    setBedrooms("all");
    setGuests("all");
    setSearchQuery("");
    setPriceRange([0, 20000]);
    setSelectedAmenities([]);
    setSelectedTiers([]);
    setMinRating(0);
  };

  // Filter properties
  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      // Basic filters

      if (destination !== "all" && property.destination !== destination)
        return false;
      // if (bedrooms !== "all" && property.bedrooms < parseInt(bedrooms))
      //   return false;
      // if (guests !== "all" && property.guests < parseInt(guests)) return false;

      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          property.title.toLowerCase().includes(query) ||
          property.location.toLowerCase().includes(query) ||
          property.destination.toLowerCase().includes(query) ||
          property.description.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Price range
      if (property.priceMin !== undefined && property.priceMax !== undefined) {
        if (
          property.priceMax < priceRange[0] ||
          property.priceMin > priceRange[1]
        )
          return false;
      } else if (property.price) {
        const parsed = parsePrice(property.price);
        if (parsed) {
          if (parsed.max < priceRange[0] || parsed.min > priceRange[1])
            return false;
        }
      }

      // Rating
      if (minRating > 0 && (property.rating ?? 0) < minRating) return false;

      // Amenities
      if (selectedAmenities.length > 0) {
        const propertyAmenities = property.amenities || property.features || [];
        const hasAllAmenities = selectedAmenities.every((amenity) =>
          propertyAmenities.some(
            (propAmenity) =>
              propAmenity.toLowerCase().includes(amenity.toLowerCase()) ||
              (amenity === "Wi-Fi" &&
                (propAmenity.toLowerCase().includes("wifi") ||
                  propAmenity.toLowerCase().includes("wi-fi")))
          )
        );
        if (!hasAllAmenities) return false;
      }

      // Tier
      if (selectedTiers.length > 0) {
        if (!property.tier || !selectedTiers.includes(property.tier))
          return false;
      }

      return true;
    });
  }, [
    destination,
    // bedrooms,
    // guests,
    searchQuery,
    priceRange,
    selectedAmenities,
    selectedTiers,
    minRating,
  ]);

  // Sort properties
  const sortedProperties = useMemo(() => {
    return [...filteredProperties].sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return (b.rating ?? 0) - (a.rating ?? 0);
        case "price-high": {
          const priceA = a.priceMin ?? parsePrice(a.price)?.min ?? 0;
          const priceB = b.priceMin ?? parsePrice(b.price)?.min ?? 0;
          return priceB - priceA;
        }
        case "price-low": {
          const priceALow = a.priceMin ?? parsePrice(a.price)?.min ?? 0;
          const priceBLow = b.priceMin ?? parsePrice(b.price)?.min ?? 0;
          return priceALow - priceBLow;
        }
        case "rating":
          return (b.rating ?? 0) - (a.rating ?? 0);
        default:
          return b.id - a.id;
      }
    });
  }, [filteredProperties, sortBy]);

  const displayedProperties = sortedProperties.slice(0, displayCount);
  const hasMore = displayCount < sortedProperties.length;

  const activeFiltersCount =
    (searchQuery ? 1 : 0) +
    (priceRange[0] > 0 || priceRange[1] < 20000 ? 1 : 0) +
    (minRating > 0 ? 1 : 0) +
    selectedAmenities.length +
    selectedTiers.length;

  // Get current destination info
  const currentDestination = useMemo(() => {
    if (destination && destination !== "all" && destinationMap[destination]) {
      return destinationMap[destination];
    }
    return null;
  }, [destination]);

  // Default background image (fallback)
  const defaultBackgroundImage =
    'url("https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80")';

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section
          className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center text-center bg-ocean"
          style={{
            backgroundImage: currentDestination
              ? `url(${currentDestination.image})`
              : defaultBackgroundImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-ocean/60"></div>
          <div className="relative z-10 text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {currentDestination
                ? `${currentDestination.name} Hotels & Villas`
                : "All Hotels & Villas"}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
              {currentDestination
                ? `Finest Collection Of Holiday Villas And Hotels In ${currentDestination.name}`
                : "Finest Collection Of Holiday Villas And Hotels Across India"}
            </p>
          </div>
        </section>

        {/* Description Section */}
        {/* <section className="container mx-auto px-4 py-12 max-w-6xl">
          <p className="text-foreground leading-relaxed">
            Browse our curated selection of luxury hotels and villas across
            India using our <em>Advanced Filtering System</em>. Search
            properties by destination, amenities, price range, and ratings to
            find your perfect stay. Every property in our portfolio has been
            personally inspected for service, style, and authenticity.
          </p>
        </section> */}

        {/* Search Bar */}
        <section className="container mx-auto px-4 max-w-7xl -mt-12 relative z-20">
          <SearchBar
            initialLocation={searchQuery}
            initialDate={
              searchParams.get("from") && searchParams.get("to")
                ? {
                    from: new Date(searchParams.get("from")!),
                    to: new Date(searchParams.get("to")!),
                  }
                : undefined
            }
            initialGuests={{
              adults: parseInt(searchParams.get("adults") || "2"),
              children: parseInt(searchParams.get("children") || "0"),
              rooms: parseInt(searchParams.get("rooms") || "1"),
            }}
            onSearch={({ location, date, guests }) => {
              const params = new URLSearchParams(searchParams);

              // Update search query
              if (location) {
                params.set("search", location);
                setSearchQuery(location);
              } else {
                params.delete("search");
                setSearchQuery("");
              }

              // Update dates
              if (date?.from) params.set("from", date.from.toISOString());
              else params.delete("from");

              if (date?.to) params.set("to", date.to.toISOString());
              else params.delete("to");

              // Update guests
              params.set("adults", guests.adults.toString());
              params.set("children", guests.children.toString());
              params.set("rooms", guests.rooms.toString());

              // Update URL
              setSearchParams(params);
            }}
            className="shadow-lg"
          />
        </section>

        {/* Active Filters */}
        {activeFiltersCount > 0 && (
          <section className="container mx-auto px-4 max-w-6xl mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Active filters:
              </span>
              {searchQuery && (
                <Badge variant="secondary" className="gap-1">
                  Search: {searchQuery}
                  <button
                    onClick={() => setSearchQuery("")}
                    className="ml-1 hover:text-foreground"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {(priceRange[0] > 0 || priceRange[1] < 20000) && (
                <Badge variant="secondary" className="gap-1">
                  Price: ₹{priceRange[0].toLocaleString()} - ₹
                  {priceRange[1].toLocaleString()}
                  <button
                    onClick={() => setPriceRange([0, 20000])}
                    className="ml-1 hover:text-foreground"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {minRating > 0 && (
                <Badge variant="secondary" className="gap-1">
                  Rating: {minRating}+ ⭐
                  <button
                    onClick={() => setMinRating(0)}
                    className="ml-1 hover:text-foreground"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {selectedAmenities.map((amenity) => (
                <Badge key={amenity} variant="secondary" className="gap-1">
                  {amenity}
                  <button
                    onClick={() =>
                      setSelectedAmenities(
                        selectedAmenities.filter((a) => a !== amenity)
                      )
                    }
                    className="ml-1 hover:text-foreground"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              {selectedTiers.map((tier) => (
                <Badge key={tier} variant="secondary" className="gap-1">
                  {tier}
                  <button
                    onClick={() =>
                      setSelectedTiers(selectedTiers.filter((t) => t !== tier))
                    }
                    className="ml-1 hover:text-foreground"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </section>
        )}

        {/* Sort Options */}
        {/* <section className="container mx-auto px-4 max-w-6xl mb-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <span className="text-muted-foreground w-full sm:w-auto">
              Sort by:
            </span>
            <button
              onClick={() => setSortBy("newest")}
              className={`hover:text-foreground transition-colors ${
                sortBy === "newest"
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              NEWEST
            </button>
            <button
              onClick={() => setSortBy("popular")}
              className={`hover:text-foreground transition-colors ${
                sortBy === "popular"
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              POPULAR
            </button>
            <button
              onClick={() => setSortBy("rating")}
              className={`hover:text-foreground transition-colors ${
                sortBy === "rating"
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              HIGHEST RATED
            </button>
            <button
              onClick={() => setSortBy("price-high")}
              className={`hover:text-foreground transition-colors whitespace-nowrap ${
                sortBy === "price-high"
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              PRICE (HIGH TO LOW)
            </button>
            <button
              onClick={() => setSortBy("price-low")}
              className={`hover:text-foreground transition-colors whitespace-nowrap ${
                sortBy === "price-low"
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              PRICE (LOW TO HIGH)
            </button>
          </div>
        </section> */}

        {/* Results Count */}
        <section className="container mx-auto px-4 max-w-7xl mb-6">
          <h2 className="text-3xl font-bold text-muted-foreground">
            {filteredProperties.length} PROPERTIES FOUND
          </h2>
        </section>

        {/* Main Content - Sidebar + Properties */}
        <section className="container mx-auto px-4 max-w-7xl mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Filter Sidebar - Desktop */}
            <aside className="hidden lg:block w-[300px] flex-shrink-0 sticky top-24">
              <FilterSidebar
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                selectedAmenities={selectedAmenities}
                onAmenitiesChange={setSelectedAmenities}
                minRating={minRating}
                onMinRatingChange={setMinRating}
                selectedTiers={selectedTiers}
                onTiersChange={setSelectedTiers}
                onClear={() => {
                  setPriceRange([0, 20000]);
                  setSelectedAmenities([]);
                  setSelectedTiers([]);
                  setMinRating(0);
                }}
              />
            </aside>

            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <Badge
                        variant="secondary"
                        className="ml-1 px-1.5 py-0.5 h-5 min-w-[1.25rem]"
                      >
                        {activeFiltersCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-[300px] sm:w-[400px] overflow-y-auto"
                >
                  <div className="mt-6">
                    <FilterSidebar
                      priceRange={priceRange}
                      onPriceRangeChange={setPriceRange}
                      selectedAmenities={selectedAmenities}
                      onAmenitiesChange={setSelectedAmenities}
                      minRating={minRating}
                      onMinRatingChange={setMinRating}
                      selectedTiers={selectedTiers}
                      onTiersChange={setSelectedTiers}
                      onClear={() => {
                        setPriceRange([0, 20000]);
                        setSelectedAmenities([]);
                        setSelectedTiers([]);
                        setMinRating(0);
                      }}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Property Cards */}
            <div className="flex-1 w-full">
              {displayedProperties.length > 0 ? (
                <>
                  <div className="space-y-8">
                    {displayedProperties.map((property) => (
                      <PropertyCard key={property.id} {...property} />
                    ))}
                  </div>

                  {/* Load More Button */}
                  {hasMore && (
                    <div className="flex justify-center mt-12">
                      <Button
                        size="lg"
                        onClick={() => setDisplayCount((prev) => prev + 12)}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 px-12"
                      >
                        LOAD MORE
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground mb-4">
                    No properties found matching your criteria
                  </p>
                  <Button onClick={handleClear} variant="outline">
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Allvillas;
