import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface FilterBarProps {
  destination: string;
  bedrooms: string;
  guests: string;
  onDestinationChange: (value: string) => void;
  onBedroomsChange: (value: string) => void;
  onGuestsChange: (value: string) => void;
  onClear: () => void;
  onAdvanced?: () => void;
}

export const FilterBar = ({
  destination,
  bedrooms,
  guests,
  onDestinationChange,
  onBedroomsChange,
  onGuestsChange,
  onClear,
  onAdvanced,
}: FilterBarProps) => {
  return (
    <div className="bg-card border-t-4 border-primary p-8 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">


        <div>
          <label className="block text-sm font-bold mb-2 uppercase">
            Destination
          </label>
          <Select value={destination} onValueChange={onDestinationChange}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Destination" />
            </SelectTrigger>
            <SelectContent className="bg-popover z-50">
              <SelectItem value="all">All Destinations</SelectItem>
              <SelectItem value="pondicherry">Pondicherry, India</SelectItem>
              <SelectItem value="madurai">Madurai, India</SelectItem>
              <SelectItem value="trichy">Trichy, India</SelectItem>
              <SelectItem value="varkala">Varkala, India</SelectItem>
              <SelectItem value="kovalam">Kovalam, India</SelectItem>
              <SelectItem value="kanyakumari">Kanyakumari, India</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-bold mb-2 uppercase">
            Rooms
          </label>
          <Select value={bedrooms} onValueChange={onBedroomsChange}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Rooms" />
            </SelectTrigger>
            <SelectContent className="bg-popover z-50">
              <SelectItem value="all">All Rooms</SelectItem>
              <SelectItem value="2">2+ Rooms</SelectItem>
              <SelectItem value="3">3+ Rooms</SelectItem>
              <SelectItem value="4">4+ Rooms</SelectItem>
              <SelectItem value="5">5+ Rooms</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-bold mb-2 uppercase">
            Guests
          </label>
          <Select value={guests} onValueChange={onGuestsChange}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Guests" />
            </SelectTrigger>
            <SelectContent className="bg-popover z-50">
              <SelectItem value="all">All Guests</SelectItem>
              <SelectItem value="4">4+ Guests</SelectItem>
              <SelectItem value="6">6+ Guests</SelectItem>
              <SelectItem value="8">8+ Guests</SelectItem>
              <SelectItem value="10">10+ Guests</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <Button
          variant="outline"
          onClick={onClear}
          className="min-w-[120px] border-2 hover:bg-secondary"
        >
          CLEAR
        </Button>
        {onAdvanced && (
          <Button
            onClick={onAdvanced}
            className="min-w-[120px] bg-primary text-primary-foreground hover:bg-primary/90"
          >
            ADVANCED
          </Button>
        )}
      </div>
    </div>
  );
};
