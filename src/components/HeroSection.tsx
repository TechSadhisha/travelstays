import { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { allProperties } from "@/data/properties";
import heroImage from "@/assets/hero-pool.webp";

// Popular destinations
const popularDestinations = [
  { name: "Pondicherry", value: "pondicherry", display: "Pondicherry, India" },
  { name: "Madurai", value: "madurai", display: "Madurai, India" },
  { name: "Trichy", value: "trichy", display: "Trichy, India" },
  { name: "Varkala", value: "varkala", display: "Varkala, India" },
  { name: "Kovalam", value: "kovalam", display: "Kovalam, India" },
  { name: "Kanyakumari", value: "kanyakumari", display: "Kanyakumari, India" },
];

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const popoverRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Filter destinations and properties based on search query
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return {
        destinations: popularDestinations.slice(0, 3), // Show only 3 popular destinations
        properties: [],
      };
    }

    const query = searchQuery.toLowerCase();

    // Filter destinations - limit to 3
    const filteredDestinations = popularDestinations
      .filter(
        (dest) =>
          dest.name.toLowerCase().includes(query) ||
          dest.display.toLowerCase().includes(query)
      )
      .slice(0, 3); // Limit to 3 results

    // Filter properties
    const filteredProperties = allProperties
      .filter(
        (property) =>
          property.title.toLowerCase().includes(query) ||
          property.location.toLowerCase().includes(query) ||
          property.destination.toLowerCase().includes(query) ||
          property.description.toLowerCase().includes(query)
      )
      .slice(0, 5);

    return {
      destinations: filteredDestinations,
      properties: filteredProperties,
    };
  }, [searchQuery]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/allvillas?search=${encodeURIComponent(searchQuery.trim())}`);
      setOpen(false);
      setSearchQuery("");
    } else {
      navigate(`/allvillas`);
      setOpen(false);
    }
  };

  const handleSelectDestination = (destinationValue: string) => {
    navigate(`/allvillas?destination=${destinationValue}`);
    setOpen(false);
    setSearchQuery("");
  };

  const handleSelectProperty = (propertyId: number) => {
    navigate(`/property/${propertyId}`);
    setOpen(false);
    setSearchQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 w-full max-w-5xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4 sm:mb-6 md:mb-8 lg:mb-10 tracking-wide italic px-2">
          Find your next stay Search deals on hotels, homes, and much more...
        </h1>

        <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg shadow-2xl mx-2 sm:mx-4 relative">
          <Popover open={open} onOpenChange={setOpen} modal={false}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
              <PopoverTrigger asChild>
                <div
                  className="relative flex-1 w-full"
                  onClick={(e) => {
                    if (!open) {
                      setOpen(true);
                    }
                  }}
                >
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground z-10 pointer-events-none" />
                  <Input
                    ref={inputRef}
                    type="text"
                    placeholder="Search hotels, locations, destinations..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setOpen(true);
                    }}
                    onFocus={() => setOpen(true)}
                    onKeyDown={handleKeyDown}
                    className="pl-10 pr-10 h-11 sm:h-12 text-base bg-white border-border text-black cursor-text"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!open) {
                        setOpen(true);
                      }
                    }}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setSearchQuery("");
                        setOpen(false);
                      }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 hover:bg-muted rounded-full p-1"
                    >
                      <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    </button>
                  )}
                </div>
              </PopoverTrigger>
              <Button
                type="button"
                onClick={handleSearch}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground h-11 sm:h-12 px-8 sm:px-10 md:px-12 text-xs sm:text-sm tracking-widest font-medium"
              >
                SEARCH
              </Button>
            </div>
            <PopoverContent
              ref={popoverRef}
              className="w-[calc(100vw-2rem)] sm:w-[500px] md:w-[600px] p-0 z-[100]"
              align="start"
              side="bottom"
              sideOffset={8}
              avoidCollisions={false}
              onOpenAutoFocus={(e) => e.preventDefault()}
              onInteractOutside={(e) => {
                // Don't close if clicking on the input or button
                if (
                  inputRef.current?.contains(e.target as Node) ||
                  (e.target as HTMLElement).closest('button[type="button"]')
                ) {
                  e.preventDefault();
                }
              }}
            >
              <Command shouldFilter={false}>
                <CommandList className="max-h-[400px] overflow-y-auto">
                  {filteredResults.destinations.length > 0 && (
                    <CommandGroup heading="Popular Destinations">
                      {filteredResults.destinations.map((dest) => (
                        <CommandItem
                          key={dest.value}
                          value={dest.name}
                          onSelect={() => {
                            handleSelectDestination(dest.value);
                          }}
                          className="cursor-pointer"
                        >
                          <div className="flex items-center gap-3 w-full py-2">
                            <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="font-medium">{dest.display}</p>
                              <p className="text-sm text-muted-foreground">
                                Explore hotels in {dest.name}
                              </p>
                            </div>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  )}

                  {filteredResults.properties.length > 0 && (
                    <CommandGroup heading="Properties">
                      {filteredResults.properties.map((property) => (
                        <CommandItem
                          key={property.id}
                          value={property.title}
                          onSelect={() => {
                            handleSelectProperty(property.id);
                          }}
                          className="cursor-pointer"
                        >
                          <div className="flex items-center gap-3 w-full py-2">
                            <img
                              src={property.image}
                              alt={property.title}
                              className="w-12 h-12 object-cover rounded flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-medium truncate">
                                {property.title}
                              </p>
                              <p className="text-sm text-muted-foreground truncate">
                                {property.location}
                              </p>
                            </div>
                            <Building2 className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  )}

                  {searchQuery &&
                    filteredResults.destinations.length === 0 &&
                    filteredResults.properties.length === 0 && (
                      <CommandEmpty>
                        <div className="py-6 text-center">
                          <p className="text-sm text-muted-foreground mb-3">
                            No results found for "{searchQuery}"
                          </p>
                          <Button
                            type="button"
                            size="sm"
                            onClick={handleSearch}
                            className="mt-2"
                          >
                            Search All Properties
                          </Button>
                        </div>
                      </CommandEmpty>
                    )}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
