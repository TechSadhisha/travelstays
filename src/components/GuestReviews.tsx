import { Star } from "lucide-react";

const GuestReviews = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4 tracking-wide">GUEST REVIEWS</h2>
          <p className="text-sm sm:text-base text-muted-foreground">What our guests say about their villa stay experience</p>
        </div>

        <div className="max-w-4xl mx-auto text-center px-2 sm:px-4">
          <blockquote className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-foreground/90">
            "If you want to relax and indulge in complete luxury this villa is simply a must. We traveled with 2 
            families with 5 kids, we didn't need to leave the villa the 25m infinity pool and the huge movie room 
            kept the kids busy and quiet for the entire week, where the villa's grounds and seating areas were 
            plenty big..."
          </blockquote>

          <div className="flex justify-center gap-1 mb-6 sm:mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-accent text-accent" />
            ))}
          </div>

          <div className="mb-6 sm:mb-8">
            <svg viewBox="0 0 100 50" className="w-20 h-10 sm:w-24 sm:h-12 mx-auto mb-3 sm:mb-4 fill-accent">
              <circle cx="20" cy="25" r="15" />
              <circle cx="50" cy="25" r="15" />
              <path d="M 20 15 Q 35 5 50 15" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>

          <div className="font-semibold text-lg sm:text-xl mb-1">NATHAN W.</div>
          <div className="text-sm sm:text-base text-muted-foreground italic mb-6 sm:mb-8">Review from Trip Advisor</div>

          <div className="flex justify-center gap-2">
            <button className="w-2.5 h-2.5 rounded-full bg-muted" aria-label="Review 1"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-muted" aria-label="Review 2"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-muted" aria-label="Review 3"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-muted" aria-label="Review 4"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-primary" aria-label="Review 5"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestReviews;
