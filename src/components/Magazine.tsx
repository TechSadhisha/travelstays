import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import pondicherry from "@/assets/dest-pondicherry.webp";
import madurai from "@/assets/dest-madurai.webp";
import varkala from "@/assets/dest-varkala.webp";
import trichy from "@/assets/dest-trichy.webp";
import kanyakumari from "@/assets/dest-kanyakumari.webp";

const Magazine = () => {
  const articles = useMemo(
    () => [
      {
        id: "pondicherry-48-hours",
        date: "OCTOBER 22, 2025",
        title: "48 Hours in Pondicherry: Heritage Walks & Boutique Stays",
        excerpt:
          "Explore French Quarter charm, sunrise cafés, and coastal bike rides with a curated two-day itinerary through Pondicherry's colourful streets.",
        image: pondicherry,
      },
      {
        id: "madurai-after-dark",
        date: "NOVEMBER 7, 2025",
        title: "Madurai After Dark: Temple Rituals & Night Markets",
        excerpt:
          "Witness illuminated gopurams, sip jasmine tea, and browse handloom stalls as Madurai's evenings come alive around the Meenakshi Temple.",
        image: madurai,
      },
      {
        id: "varkala-cliff-notes",
        date: "NOVEMBER 5, 2025",
        title: "Varkala Cliff Notes: Yoga, Seafood & Sunset Sessions",
        excerpt:
          "From Ayurvedic retreats to cliff-top cafés and live music sundowners, here's how to design a laid-back luxury escape in Varkala.",
        image: varkala,
      },
      {
        id: "trichy-riverfront",
        date: "OCTOBER 30, 2025",
        title: "Trichy Riverfront Retreats for Slow Travelers",
        excerpt:
          "From Rockfort panoramas to Cauvery boat rides, discover how to slow down in Tiruchirappalli with boutique stays and heritage excursions.",
        image: trichy,
      },
      {
        id: "kanyakumari-sunrises",
        date: "OCTOBER 22, 2025",
        title: "Chasing Sunrises at India's Southern Tip",
        excerpt:
          "Kanyakumari's Triveni Sangam, lighthouse sunsets, and coastal cuisine make it an evocative finale to any South India itinerary.",
        image: kanyakumari,
      },
    ],
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
    if (articles.length <= visibleCount) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [articles.length, visibleCount]);

  useEffect(() => {
    if (articles.length === 0) return;
    setCurrentIndex((prev) => prev % articles.length);
  }, [articles.length]);

  if (articles.length === 0) {
    return null;
  }

  const slidesToShow = Math.min(visibleCount, articles.length);
  const renderedArticles = Array.from({ length: slidesToShow }, (_, offset) => {
    const index = (currentIndex + offset) % articles.length;
    return articles[index];
  });

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4 tracking-wide">MAGAZINE</h2>
          <p className="text-sm sm:text-base text-muted-foreground">Read inspiration, stories, and more...</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {renderedArticles.map((article) => (
            <article key={article.id} className="group">
              <Link to={`/magazine#${article.id}`} className="block">
                <div className="relative overflow-hidden rounded-lg mb-4 sm:mb-6 aspect-video">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary text-primary-foreground px-3 py-1 sm:px-4 text-[10px] sm:text-xs tracking-wider font-medium">
                    {article.date}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 leading-tight group-hover:text-muted-foreground transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
              <Link to={`/magazine#${article.id}`}>
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm sm:text-base">
                  READ MORE
                </Button>
              </Link>
            </article>
          ))}
        </div>

        {articles.length > visibleCount && (
          <div className="flex justify-center gap-2">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  currentIndex === index ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Go to article ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Magazine;
