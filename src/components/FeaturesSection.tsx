import { Crown, Utensils, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Crown,
      title: "FINEST COLLECTION",
      description:
        "The highest standard in luxury stay rentals, our select portfolio represents Travel Stays' unyielding dedication to excellence. From hundreds of possible selections in each location, only the best stays are chosen to present to our elite clientele.",
    },
    {
      icon: Utensils,
      title: "PERSONALISED EXPERIENCE",
      description:
        "Everyone's ideal vacation is different. To account for that, we don't just sell the same prepackaged experience. We go to great lengths to offer dedicated concierge service, a trained expert who can customize your stay experience.",
    },
    {
      icon: Users,
      title: "5-STAR AMENITIES",
      description:
        "Starting from 4 bedrooms and up, featuring luxurious amenities and facilities such as a private pool, gym, spa, cinema, entertainment areas, tennis court, and much more. Let our specialist help find your dream holiday home.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary mb-4 sm:mb-6">
                <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
