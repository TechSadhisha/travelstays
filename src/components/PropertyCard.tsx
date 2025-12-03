import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate, useLocation } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import { Property } from "@/data/properties";

interface PropertyCardProps extends Property {}

export const PropertyCard = (property: PropertyCardProps) => {
  const navigate = useNavigate();
  const locationState = useLocation();
  const {
    id,
    title,
    location,
    bedrooms,

    guests,
    description,
    features,
    price,
    image,

    rating,
    reviewCount,
  } = property;

  const handleNavigate = (e: React.MouseEvent) => {
    // Prevent navigation if user is selecting text
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      return;
    }
    e.stopPropagation();
    navigate(`/property/${id}${locationState.search}`);
  };

  return (
    <Card
      className="overflow-hidden border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
      onClick={handleNavigate}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image Section - Left Side */}
        <div className="relative md:w-[45%] flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-64 md:h-full object-cover"
          />
          {rating && (
            <Badge className="absolute top-4 right-4 bg-background/90 text-foreground flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{rating.toFixed(1)}</span>
            </Badge>
          )}
        </div>

        {/* Content Section - Right Side */}
        <CardContent className="p-6 md:w-[55%] flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground italic mb-2">
                  <MapPin className="h-3 w-3" />
                  <span>{location}</span>
                </div>
                {rating && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {rating.toFixed(1)} ({reviewCount ?? 0} reviews)
                    </span>
                  </div>
                )}
              </div>
              {price && (
                <div className="text-right ml-4">
                  <p className="text-sm text-muted-foreground">From</p>
                  <p className="text-base font-bold text-foreground whitespace-nowrap">
                    {price}
                  </p>
                  <p className="text-sm text-muted-foreground">/night</p>
                </div>
              )}
            </div>

            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
              {description}
            </p>

            <div className="mb-4">
              <p className="text-sm line-clamp-2">
                <strong>Features:</strong> {features.slice(0, 4).join(", ")}
                {features.length > 4 && "..."}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <div
              className="flex items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            ></div>
            {!price ? (
              <Button variant="outline" size="sm" onClick={handleNavigate}>
                Request for Quote
              </Button>
            ) : (
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleNavigate}
              >
                VIEW DETAILS →
              </Button>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
