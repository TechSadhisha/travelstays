import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";

interface AdvancedFiltersProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  selectedAmenities: string[];
  onAmenitiesChange: (amenities: string[]) => void;
  minRating: number;
  onMinRatingChange: (rating: number) => void;
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

export const AdvancedFilters = ({
  open,
  onOpenChange,
  priceRange,
  onPriceRangeChange,
  selectedAmenities,
  onAmenitiesChange,
  minRating,
  onMinRatingChange,
  onClear,
}: AdvancedFiltersProps) => {
  const toggleAmenity = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      onAmenitiesChange(selectedAmenities.filter((a) => a !== amenity));
    } else {
      onAmenitiesChange([...selectedAmenities, amenity]);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Advanced Filters</DialogTitle>
          <DialogDescription>
            Refine your search with detailed filters
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Price Range */}
          <div>
            <Label className="text-base font-semibold mb-4 block">
              Price Range (₹ per night)
            </Label>
            <div className="px-2">
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
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>₹{priceRange[0].toLocaleString()}</span>
              <span>₹{priceRange[1].toLocaleString()}</span>
            </div>
          </div>

          <Separator />

          {/* Rating */}
          <div>
            <Label className="text-base font-semibold mb-4 block">
              Minimum Rating
            </Label>
            <div className="flex gap-2">
              {[4, 4.5, 5].map((rating) => (
                <Button
                  key={rating}
                  variant={minRating === rating ? "default" : "outline"}
                  size="sm"
                  onClick={() => onMinRatingChange(rating)}
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
            <div className="grid grid-cols-2 gap-3">
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
                    className="text-sm font-normal cursor-pointer"
                  >
                    {amenity}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Actions */}
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={onClear}>
              Clear All
            </Button>
            <Button onClick={() => onOpenChange(false)}>Apply Filters</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

