import { useState, useMemo, useEffect, useRef } from "react";
import {
  Search,
  X,
  MapPin,
  Building2,
  Calendar as CalendarIcon,
  User,
  Minus,
  Plus,
  BedDouble,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
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

// Popular destinations
const popularDestinations = [
  { name: "Pondicherry", value: "pondicherry", display: "Pondicherry, India" },
  { name: "Madurai", value: "madurai", display: "Madurai, India" },
  { name: "Trichy", value: "trichy", display: "Trichy, India" },
  { name: "Varkala", value: "varkala", display: "Varkala, India" },
  { name: "Kovalam", value: "kovalam", display: "Kovalam, India" },
  { name: "Kochi", value: "kochi", display: "Kochi, India" },
  { name: "Kanyakumari", value: "kanyakumari", display: "Kanyakumari, India" },
  { name: "Salem", value: "salem", display: "Salem, India" },
  { name: "Munnar", value: "munnar", display: "Munnar, India" },
  {
    name: "Thiruvananthapuram",
    value: "thiruvananthapuram",
    display: "Thiruvananthapuram, India",
  },
];

export interface SearchBarProps {
  initialLocation?: string;
  initialDate?: DateRange;
  initialGuests?: {
    adults: number;
    children: number;
    rooms: number;
  };
  onSearch: (params: {
    location: string;
    date: DateRange | undefined;
    guests: {
      adults: number;
      children: number;
      rooms: number;
    };
  }) => void;
  className?: string;
}

const DEFAULT_GUESTS = { adults: 2, children: 0, rooms: 1 };

export const SearchBar = ({
  initialLocation = "",
  initialDate,
  initialGuests = DEFAULT_GUESTS,
  onSearch,
  className = "",
}: SearchBarProps) => {
  // Location State
  const [searchQuery, setSearchQuery] = useState<string>(initialLocation);
  const [locationOpen, setLocationOpen] = useState(false);

  // Date State
  const [date, setDate] = useState<DateRange | undefined>(initialDate);
  const [dateOpen, setDateOpen] = useState(false);

  // Guests State
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [guests, setGuests] = useState(initialGuests);

  const locationInputRef = useRef<HTMLInputElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update state when props change (useful for URL sync)
  useEffect(() => {
    if (initialLocation !== undefined) setSearchQuery(initialLocation);
  }, [initialLocation]);

  useEffect(() => {
    if (initialDate !== undefined) setDate(initialDate);
  }, [initialDate]);

  useEffect(() => {
    if (initialGuests !== undefined) setGuests(initialGuests);
  }, [initialGuests]);

  // Filter destinations and properties based on search query
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return {
        destinations: popularDestinations.slice(0, 10),
        properties: [],
      };
    }

    const query = searchQuery.toLowerCase();

    const filteredDestinations = popularDestinations
      .filter(
        (dest) =>
          dest.name.toLowerCase().includes(query) ||
          dest.display.toLowerCase().includes(query)
      )
      .slice(0, 10);

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

  const handleSearchClick = () => {
    onSearch({
      location: searchQuery,
      date,
      guests,
    });
  };

  const handleSelectDestination = (destinationValue: string) => {
    setSearchQuery(destinationValue);
    setLocationOpen(false);
  };

  const handleSelectProperty = (propertyTitle: string) => {
    setSearchQuery(propertyTitle);
    setLocationOpen(false);
  };

  const updateGuests = (
    field: keyof typeof guests,
    operation: "increment" | "decrement"
  ) => {
    setGuests((prev) => {
      const newValue =
        operation === "increment" ? prev[field] + 1 : prev[field] - 1;
      if (field === "adults" && newValue < 1) return prev;
      if (field === "rooms" && newValue < 1) return prev;
      if (newValue < 0) return prev;
      return { ...prev, [field]: newValue };
    });
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-2xl mx-auto max-w-5xl border-4 border-black p-1 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200 ${className}`}
    >
      {/* Location Input */}
      <div className="relative flex-1">
        <Popover open={locationOpen} onOpenChange={setLocationOpen}>
          <PopoverTrigger asChild>
            <button
              className="w-full h-14 md:h-16 px-4 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left"
              onClick={() => setLocationOpen(true)}
            >
              <BedDouble className="h-5 w-5 text-gray-500" />
              <div className="flex-1 overflow-hidden">
                {searchQuery ? (
                  <span className="text-gray-900 font-medium truncate block">
                    {searchQuery}
                  </span>
                ) : (
                  <span className="text-gray-500 truncate block">
                    Where are you going?
                  </span>
                )}
              </div>
              {searchQuery && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setSearchQuery("");
                  }}
                  className="p-1 hover:bg-gray-200 rounded-full"
                >
                  <X className="h-4 w-4 text-gray-400" />
                </div>
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] sm:w-[400px] p-0" align="start">
            <Command shouldFilter={false}>
              <div className="flex items-center border-b px-3">
                <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                <input
                  ref={locationInputRef}
                  className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                {filteredResults.destinations.length > 0 && (
                  <CommandGroup heading="Popular Destinations">
                    {filteredResults.destinations.map((dest) => (
                      <CommandItem
                        key={dest.value}
                        onSelect={() => handleSelectDestination(dest.name)}
                        className="cursor-pointer"
                      >
                        <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{dest.display}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
                {filteredResults.properties.length > 0 && (
                  <CommandGroup heading="Properties">
                    {filteredResults.properties.map((property) => (
                      <CommandItem
                        key={property.id}
                        onSelect={() => handleSelectProperty(property.title)}
                        className="cursor-pointer"
                      >
                        <Building2 className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{property.title}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Date Picker */}
      <div className="relative flex-1">
        <Popover open={dateOpen} onOpenChange={setDateOpen}>
          <PopoverTrigger asChild>
            <button className="w-full h-14 md:h-16 px-4 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left">
              <CalendarIcon className="h-5 w-5 text-gray-500" />
              <div className="flex-1 overflow-hidden">
                {date?.from ? (
                  <span className="text-gray-900 font-medium truncate block">
                    {format(date.from, "LLL dd")}
                    {date.to && ` - ${format(date.to, "LLL dd")}`}
                  </span>
                ) : (
                  <span className="text-gray-500 truncate block">
                    Check-in - Check-out
                  </span>
                )}
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto p-0"
            align="start"
            side="bottom"
            avoidCollisions={false}
          >
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Guests Selector */}
      <div className="relative flex-1">
        <Popover open={guestsOpen} onOpenChange={setGuestsOpen}>
          <PopoverTrigger asChild>
            <button className="w-full h-14 md:h-16 px-4 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left">
              <User className="h-5 w-5 text-gray-500" />
              <div className="flex-1 overflow-hidden">
                <span className="text-gray-900 font-medium truncate block">
                  {guests.adults} Adults · {guests.rooms} Rooms
                </span>
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-4" align="end">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Adults</div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateGuests("adults", "decrement")}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{guests.adults}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateGuests("adults", "increment")}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Rooms</div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateGuests("rooms", "decrement")}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{guests.rooms}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateGuests("rooms", "increment")}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Search Button */}
      <div className="p-1">
        <Button
          onClick={handleSearchClick}
          className="w-full md:w-auto h-full min-h-[48px] md:min-h-0 bg-black hover:bg-gray-800 text-white font-medium px-8 text-lg rounded-md"
        >
          Search
        </Button>
      </div>
    </div>
  );
};
