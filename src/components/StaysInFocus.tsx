import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { allProperties } from "@/data/properties";
import { LazyImage } from "@/components/LazyImage";

const FEATURED_IDS = [1, 2, 3, 6, 16, 21, 26];

const StaysInFocus = () => {
  const navigate = useNavigate();
  const featuredStays = useMemo(
    () =>
      FEATURED_IDS.map((id) =>
        allProperties.find((property) => property.id === id)
      ).filter(
        (property): property is NonNullable<typeof property> => !!property
      ),
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const calculateVisibleCount = () => {
      if (typeof window === "undefined") return 1;

      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };

    const updateVisibleCount = () => {
      setVisibleCount((prev) => {
        const next = calculateVisibleCount();
        return prev === next ? prev : next;
      });
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    if (featuredStays.length <= visibleCount) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredStays.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredStays.length, visibleCount]);

  useEffect(() => {
    if (featuredStays.length === 0) return;
    setCurrentIndex((prev) => prev % featuredStays.length);
  }, [featuredStays.length]);

  if (featuredStays.length === 0) {
    return null;
  }

  const slidesToShow = Math.min(visibleCount, featuredStays.length);
  const renderedStays = Array.from({ length: slidesToShow }, (_, offset) => {
    const index = (currentIndex + offset) % featuredStays.length;
    return featuredStays[index];
  });

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4 tracking-wide">
            STAYS IN FOCUS
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            A preview of some of our best stay collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {renderedStays.map((stay) => (
            <div
              key={stay.id}
              className="group cursor-pointer"
              onClick={() => navigate(`/property/${stay.id}`)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <LazyImage
                  src={stay.image}
                  alt={stay.title}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-light mb-2">
                {stay.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground italic mb-4">
                {stay.location}
              </p>
              <Button
                variant="link"
                className="p-0 h-auto text-sm sm:text-base font-medium group/btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/property/${stay.id}`);
                }}
              >
                VIEW DETAILS
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        {featuredStays.length > visibleCount && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: featuredStays.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  currentIndex === index ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StaysInFocus;
