import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const REVIEWS = [
  {
    id: 1,
    content:
      "If you want to relax and indulge in complete luxury this villa is simply a must. We traveled with 2 families with 5 kids, we didn't need to leave the villa the 25m infinity pool and the huge movie room kept the kids busy and quiet for the entire week, where the villa's grounds and seating areas were plenty big...",
    author: "NATHAN W.",
    source: "Review from Trip Advisor",
  },
  {
    id: 2,
    content:
      "An absolute paradise! The staff was incredibly attentive, and the views were breathtaking. Every detail was thought of, from the welcome drinks to the daily housekeeping. We will definitely be coming back next year.",
    author: "SARAH J.",
    source: "Review from Google",
  },
  {
    id: 3,
    content:
      "The perfect getaway for our anniversary. The villa was spotless, modern, and very private. The concierge service helped us book amazing local experiences. Highly recommended for couples looking for a romantic escape.",
    author: "MICHAEL T.",
    source: "Review from Airbnb",
  },
  {
    id: 4,
    content:
      "Stunning architecture and design. The infinity pool is even better in person. Great location, close to the beach but still very secluded. A truly 5-star experience.",
    author: "EMILY R.",
    source: "Review from Booking.com",
  },
  {
    id: 5,
    content:
      "We had a family reunion here and it was magical. Plenty of space for everyone, and the kitchen was fully equipped for our big family dinners. The kids loved the game room!",
    author: "DAVID L.",
    source: "Review from Trip Advisor",
  },
];

const GuestReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentReview = REVIEWS[currentIndex];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4 tracking-wide">
            GUEST REVIEWS
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            What our guests say about their villa stay experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center px-2 sm:px-4">
          <div className="min-h-[200px] flex flex-col justify-center">
            <blockquote className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-foreground/90 transition-opacity duration-500">
              "{currentReview.content}"
            </blockquote>

            <div className="flex justify-center gap-1 mb-6 sm:mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 sm:w-6 sm:h-6 fill-accent text-accent"
                />
              ))}
            </div>

            <div className="mb-6 sm:mb-8">
              <svg
                viewBox="0 0 100 50"
                className="w-20 h-10 sm:w-24 sm:h-12 mx-auto mb-3 sm:mb-4 fill-accent"
              >
                <circle cx="20" cy="25" r="15" />
                <circle cx="50" cy="25" r="15" />
                <path
                  d="M 20 15 Q 35 5 50 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="font-semibold text-lg sm:text-xl mb-1">
              {currentReview.author}
            </div>
            <div className="text-sm sm:text-base text-muted-foreground italic mb-6 sm:mb-8">
              {currentReview.source}
            </div>
          </div>

          <div className="flex justify-center gap-2">
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentIndex === index ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Review ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestReviews;
