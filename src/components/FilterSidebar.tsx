import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";

interface FilterSidebarProps {
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  selectedAmenities: string[];
  onAmenitiesChange: (amenities: string[]) => void;
  minRating: number;
  onMinRatingChange: (rating: number) => void;
  selectedTiers: string[];
  onTiersChange: (tiers: string[]) => void;
  onClear: () => void;
}

const availableAmenities = [
  "Wi-Fi",
  "Parking",
  "Pool",
  "Restaurant",
  "Spa",
  "Beach Access",
  "Air Conditioning",
  "Breakfast Included",
  "Room Service",
  "Concierge",
];

export const FilterSidebar = ({
  priceRange,
  onPriceRangeChange,
  selectedAmenities,
  onAmenitiesChange,
  minRating,
  onMinRatingChange,
  selectedTiers,
  onTiersChange,
  onClear,
}: FilterSidebarProps) => {
  const toggleAmenity = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      onAmenitiesChange(selectedAmenities.filter((a) => a !== amenity));
    } else {
      onAmenitiesChange([...selectedAmenities, amenity]);
    }
  };

  const toggleTier = (tier: string) => {
    if (selectedTiers.includes(tier)) {
      onTiersChange(selectedTiers.filter((t) => t !== tier));
    } else {
      onTiersChange([...selectedTiers, tier]);
    }
  };

  const activeFiltersCount =
    (priceRange[0] > 0 || priceRange[1] < 20000 ? 1 : 0) +
    (minRating > 0 ? 1 : 0) +
    selectedAmenities.length +
    selectedTiers.length;

  return (
    <div className="bg-background border rounded-lg p-6 sticky top-24 h-fit">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Filter by:</h3>
        {activeFiltersCount > 0 && (
          <Button variant="ghost" size="sm" onClick={onClear}>
            Clear all
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Price Range */}
        <div>
          <Label className="text-base font-semibold mb-4 block">
            Price Range (₹ per night)
          </Label>
          <div className="px-2 mb-4">
            <Slider
              value={priceRange}
              onValueChange={(value) =>
                onPriceRangeChange(value as [number, number])
              }
              min={0}
              max={20000}
              step={500}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹{priceRange[0].toLocaleString()}</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
        </div>

        <Separator />

        {/* Hotel Tier */}
        <div>
          <Label className="text-base font-semibold mb-4 block">
            Hotel Tier
          </Label>
          <div className="space-y-3">
            {["Budget", "Premium", "Luxury"].map((tier) => (
              <div key={tier} className="flex items-center space-x-2">
                <Checkbox
                  id={`tier-${tier}`}
                  checked={selectedTiers.includes(tier)}
                  onCheckedChange={() => toggleTier(tier)}
                />
                <Label
                  htmlFor={`tier-${tier}`}
                  className="text-sm font-normal cursor-pointer flex-1"
                >
                  {tier}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Rating */}
        <div>
          <Label className="text-base font-semibold mb-4 block">
            Minimum Rating
          </Label>
          <div className="flex flex-col gap-2">
            {[4, 4.5, 5].map((rating) => (
              <Button
                key={rating}
                variant={minRating === rating ? "default" : "outline"}
                size="sm"
                onClick={() => onMinRatingChange(rating)}
                className="justify-start"
              >
                {rating}+ ⭐
              </Button>
            ))}
          </div>
        </div>

        <Separator />

        {/* Amenities */}
        <div>
          <Label className="text-base font-semibold mb-4 block">
            Amenities
          </Label>
          <div className="space-y-3">
            {availableAmenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center space-x-2"
              >
                <Checkbox
                  id={`amenity-${amenity}`}
                  checked={selectedAmenities.includes(amenity)}
                  onCheckedChange={() => toggleAmenity(amenity)}
                />
                <Label
                  htmlFor={`amenity-${amenity}`}
                  className="text-sm font-normal cursor-pointer flex-1"
                >
                  {amenity}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
