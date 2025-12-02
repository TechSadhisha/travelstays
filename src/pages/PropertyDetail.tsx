import { useParams, Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Star, CalendarIcon, ChevronRight, MapPin } from "lucide-react";
import { format } from "date-fns";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { InquiryForm } from "@/components/InquiryForm";
import { getPropertyById } from "@/data/properties";
import { cn } from "@/lib/utils";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const property = id ? getPropertyById(parseInt(id)) : undefined;
  
  // Initialize state from URL params
  const [checkIn, setCheckIn] = useState<Date | undefined>(
    searchParams.get("from") ? new Date(searchParams.get("from")!) : undefined
  );
  const [checkOut, setCheckOut] = useState<Date | undefined>(
    searchParams.get("to") ? new Date(searchParams.get("to")!) : undefined
  );
  
  const adults = parseInt(searchParams.get("adults") || "0");
  const initialGuests = adults > 0 ? adults : property?.guests;
  const initialRooms = searchParams.get("rooms") ? parseInt(searchParams.get("rooms")!) : property?.bedrooms;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
          <Link to="/allvillas" className="text-primary hover:underline">
            Return to All Villas
          </Link>
        </div>
      </div>
    );
  }

  const images = property.images || [property.image];
  const destinationName =
    property.destination.charAt(0).toUpperCase() + property.destination.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <Navigation />
      
      <div className="flex-1">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-3 md:py-4 max-w-7xl">
          <nav className="flex items-center gap-1 md:gap-2 text-xs sm:text-sm text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
            <Link
              to="/destinations"
              className="hover:text-foreground transition-colors"
            >
              Destinations
            </Link>
            <ChevronRight className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
            <Link
              to={`/destinations?destination=${property.destination}`}
              className="hover:text-foreground transition-colors truncate max-w-[150px] sm:max-w-none"
            >
              {destinationName} Villas
            </Link>
            <ChevronRight className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
            <span className="text-foreground truncate max-w-[150px] sm:max-w-none">
              {property.title}
            </span>
          </nav>
        </div>

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Main Content - Left Side */}
            <div className="flex-1 lg:w-2/3">
              {/* Hero Image Gallery */}
              <div className="relative mb-8">
                <div className="relative w-full h-[250px] md:h-[450px] rounded-lg overflow-hidden bg-muted">
                  <img
                    src={images[currentImageIndex]}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  {images.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background h-8 w-8 sm:h-10 sm:w-10"
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev === 0 ? images.length - 1 : prev - 1
                          )
                        }
                      >
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 rotate-180" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background h-8 w-8 sm:h-10 sm:w-10"
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev === images.length - 1 ? 0 : prev + 1
                          )
                        }
                      >
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                        {currentImageIndex + 1} / {images.length}
                      </div>
                    </>
                  )}
                </div>
                
                {/* Thumbnail Gallery */}
                {images.length > 1 && (
                  <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                    {images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={cn(
                          "flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-md overflow-hidden border-2 transition-all",
                          currentImageIndex === index
                            ? "border-primary"
                            : "border-transparent opacity-60 hover:opacity-100"
                        )}
                      >
                        <img
                          src={img}
                          alt={`${property.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Property Title and Badge */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                      {property.title}
                    </h1>
                    <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span>{property.location}</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Description */}
              <div className="mb-8 space-y-4 text-muted-foreground leading-relaxed">
                {property.description
                  .split("\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>

              {/* Back Link */}
              <div className="mb-8">
                <Link
                  to={`/allvillas?destination=${property.destination}`}
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Go back to view all: {destinationName} Luxury Villas
                </Link>
              </div>

              {/* Accordion Sections */}
              <div className="mb-8">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="bedrooms">
                    <AccordionTrigger className="text-left">
                      All Rooms (Sleeping Arrangement)
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        {property.bedroomsDetails?.map((bedroom, index) => (
                          <div key={index} className="border-b pb-4 last:border-0">
                            <h4 className="font-semibold mb-1">{bedroom.room}</h4>
                            <p className="text-muted-foreground mb-1">
                              {bedroom.beds}
                            </p>
                            {bedroom.description && (
                              <p className="text-sm text-muted-foreground">
                                {bedroom.description}
                              </p>
                            )}
                          </div>
                        )) || (
                          <p className="text-muted-foreground">
                            {property.bedrooms} bedrooms available
                          </p>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="features">
                    <AccordionTrigger className="text-left">
                      Features & Amenities
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {property.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="text-primary">•</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="staff">
                    <AccordionTrigger className="text-left">
                      Staff & Services
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {property.staffServices?.map((service, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="text-primary">•</span>
                            <span>{service}</span>
                          </div>
                        )) || (
                          <p className="text-muted-foreground">
                            Standard services included
                          </p>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="terms">
                    <AccordionTrigger className="text-left">
                      Terms & Conditions
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {property.termsConditions?.map((term, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="text-primary">•</span>
                            <span>{term}</span>
                          </div>
                        )) || (
                          <p className="text-muted-foreground">
                            Standard terms and conditions apply
                          </p>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>



              {/* Guest Reviews */}
              {property.rating && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Guest Reviews</h2>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(property.rating!)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-lg font-semibold">
                      {property.rating.toFixed(1)}
                    </span>
                    <span className="text-muted-foreground">
                      ({property.reviewCount ?? 0} reviews)
                    </span>
                  </div>
                
                
                </div>
              )}
            </div>

            {/* Sidebar - Right Side */}
            <div className="lg:w-1/3 lg:sticky lg:top-20 lg:h-fit order-first lg:order-last">
              <div className="bg-background border rounded-lg overflow-hidden">
                {/* Request for Quote Header */}
                <div className="bg-foreground text-background px-4 sm:px-6 py-3 sm:py-4">
                  <h2 className="text-lg sm:text-xl font-bold">Request for Quote</h2>
                </div>

                {/* Property Details */}
                <div className="px-4 sm:px-6 py-4 space-y-3 border-b">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Destination:</span>
                    <span className="font-medium">{destinationName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rooms:</span>
                    <span className="font-medium">{initialRooms || property.bedrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Adults:</span>
                    <span className="font-medium">{adults || property.guests}</span>
                  </div>
                </div>

                {/* Check-in/Check-out */}
                <div className="px-4 sm:px-6 py-4 space-y-4 border-b">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      CHECK-IN
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkIn && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? (
                            format(checkIn, "PPP")
                          ) : (
                            <span>Select date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      CHECK-OUT
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkOut && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? (
                            format(checkOut, "PPP")
                          ) : (
                            <span>Select date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          disabled={(date) =>
                            date < new Date() || (checkIn && date <= checkIn)
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-4 sm:px-6 py-4 space-y-3">
                  <Button
                    className="w-full bg-black hover:bg-black text-white text-sm sm:text-base"
                    size="lg"
                    onClick={() => setInquiryOpen(true)}
                  >
                    SEND AN BOOKING INQUIRY
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Inquiry Form Dialog */}
      {property && (
        <InquiryForm
          open={inquiryOpen}
          onOpenChange={setInquiryOpen}
          property={property}
          checkIn={checkIn}
          checkOut={checkOut}
          initialGuests={initialGuests}
          initialRooms={initialRooms}
        />
      )}
    </div>
  );
};

export default PropertyDetail;

