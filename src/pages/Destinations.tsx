import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/destinations-hero.webp";
import pondicherry from "@/assets/dest-pondicherry.webp";
import madurai from "@/assets/dest-madurai.webp";
import trichy from "@/assets/dest-trichy.webp";
import varkala from "@/assets/dest-varkala.webp";
import kovalam from "@/assets/dest-kovalam.webp";
import kanyakumari from "@/assets/dest-kanyakumari.webp";

interface DestinationInfo {
  name: string;
  slug: string;
  image: string;
  description: string;
  facts: {
    title: string;
    description: string;
    icon: string;
  }[];
}

const Destinations = () => {
  const navigate = useNavigate();
  
  const destinations: DestinationInfo[] = useMemo(
    () => [
      {
        name: "Pondicherry",
        slug: "pondicherry",
        image: pondicherry,
        description:
          "A blend of French elegance and Tamil heritage, Pondicherry is your gateway to cobblestone streets, serene beaches, and boutique stays that pair nostalgia with modern comfort.",
        facts: [
          {
            title: "French Quarter Charms",
            description:
              "The historic White Town features mustard-yellow villas, vibrant bougainvillea, and sidewalk cafés that echo its French colonial past.",
            icon: "🏛️",
          },
          {
            title: "Beachfront Sunrises",
            description:
              "Promenade Beach is famed for its sunrise strolls, while Serenity Beach offers surf-friendly waves and relaxed shacks.",
            icon: "🌅",
          },
          {
            title: "Spiritual Retreats",
            description:
              "The Sri Aurobindo Ashram and nearby Auroville promote mindfulness, creative workshops, and alternative wellness therapies.",
            icon: "🧘",
          },
          {
            title: "Café Culture",
            description:
              "Expect artisanal bakeries, fusion restaurants, and Parisian-style cafés serving fresh croissants alongside filter coffee.",
            icon: "☕",
          },
          {
            title: "Handcrafted Boutiques",
            description:
              "Boutique stores sell bespoke pottery, textiles, and ethical fashion produced by local artisans and social enterprises.",
            icon: "🛍️",
          },
          {
            title: "Heritage Walks",
            description:
              "Curated walking tours narrate stories of colonial architecture, Tamil mansions, and the city's vibrant cultural fusion.",
            icon: "🚶",
          },
        ],
      },
      {
        name: "Madurai",
        slug: "madurai",
        image: madurai,
        description:
          "Called the 'Athens of the East', Madurai is a living heritage city where temple towers watch over bustling markets, craft traditions, and classic South Indian hospitality.",
        facts: [
          {
            title: "Temple City Heartbeat",
            description:
              "The 2,000-year-old Meenakshi Amman Temple dazzles with 14 gopurams, intricate sculptures, and nightly processions.",
            icon: "🌺",
          },
          {
            title: "Jasmine Capital",
            description:
              "Madurai Malligai jasmine is exported worldwide; visit the vibrant flower markets to see garlands crafted at dawn.",
            icon: "🌼",
          },
          {
            title: "Chettinad Cuisine",
            description:
              "Savour aromatic curries, pepper chicken, and melt-in-your-mouth idlis in legendary eateries passed down for generations.",
            icon: "🍽️",
          },
          {
            title: "Silk & Stone Crafts",
            description:
              "Handloom sarees, stone carvings, and brass lamps from nearby artisans make for exquisite keepsakes.",
            icon: "🧵",
          },
          {
            title: "Cultural Evenings",
            description:
              "Light-and-sound shows at Thirumalai Nayakkar Mahal and classical dance recitals reveal stories from Tamil epics.",
            icon: "🎭",
          },
          {
            title: "Seasonal Festivities",
            description:
              "Plan around Chithirai Festival or the Float Festival on the shimmering Mariamman Teppakulam tank for a grand spectacle.",
            icon: "🎉",
          },
        ],
      },
      {
        name: "Trichy",
        slug: "trichy",
        image: trichy,
        description:
          "Trichy (Tiruchirappalli) combines ancient rock forts, riverside temples, and a relaxed city rhythm—perfect for guests seeking culture without the crowds.",
        facts: [
          {
            title: "Rockfort Panorama",
            description:
              "Climb the 83-meter high Rockfort Temple complex for sweeping views of the Kaveri River and city skyline.",
            icon: "🪨",
          },
          {
            title: "Srirangam Island",
            description:
              "Sri Ranganathaswamy Temple is the world’s largest functioning Hindu temple complex with 21 towers and vibrant festivals.",
            icon: "🙏",
          },
          {
            title: "Cauvery Evenings",
            description:
              "Riverfront ghats offer peaceful boat rides and golden-hour views, especially near Amma Mandapam.",
            icon: "🚣",
          },
          {
            title: "Academic Hub",
            description:
              "Trichy hosts premier institutions like NIT Tiruchirappalli, infusing the city with a youthful, cosmopolitan vibe.",
            icon: "🎓",
          },
          {
            title: "Local Flavours",
            description:
              "Sample thengai paal, karupatti coffee, and banana leaf meals that celebrate the region’s farm-fresh produce.",
            icon: "🥘",
          },
          {
            title: "Traditional Handicrafts",
            description:
              "Pick up Tanjore plates, handcrafted cigars from nearby Woraiyur, and temple jewellery inspired pieces.",
            icon: "🛒",
          },
        ],
      },
      {
        name: "Varkala",
        slug: "varkala",
        image: varkala,
        description:
          "Perched along Kerala’s dramatic laterite cliffs, Varkala is a laid-back beach haven known for yoga retreats, sunset cafés, and Arabian Sea breezes.",
        facts: [
          {
            title: "Cliffside Sunsets",
            description:
              "Varkala Cliff offers uninterrupted sunset panoramas with cafés, boutiques, and live music lining the edge.",
            icon: "🌇",
          },
          {
            title: "Natural Spring Beach",
            description:
              "Papanasam Beach is famed for its mineral-rich freshwater springs believed to have healing properties.",
            icon: "💧",
          },
          {
            title: "Wellness Retreats",
            description:
              "Ayurvedic centres and yoga studios provide personalised therapies, meditation sessions, and detox programs.",
            icon: "🧘",
          },
          {
            title: "Seafood Bounty",
            description:
              "Enjoy just-caught seafood grilled with Kerala spices, or sample vegan cafés serving smoothie bowls and kombucha.",
            icon: "🐟",
          },
          {
            title: "Artisanal Markets",
            description:
              "Cliffside stalls sell handmade soaps, macramé art, and beachwear crafted by local cooperatives.",
            icon: "🎨",
          },
          {
            title: "Temple Heritage",
            description:
              "The 2,000-year-old Janardanaswamy Temple sits near the cliff, blending spiritual calm with sea views.",
            icon: "⛩️",
          },
        ],
      },
      {
        name: "Kovalam",
        slug: "kovalam",
        image: kovalam,
        description:
          "Once a sleepy fishing village, Kovalam now welcomes discerning travellers with crescent beaches, lighthouse vistas, and soothing Ayurvedic escapes.",
        facts: [
          {
            title: "Lighthouse Landmark",
            description:
              "Climb the Vizhinjam Lighthouse for a 360° view of the coastline, fishing harbour, and lush coconut groves.",
            icon: "🛟",
          },
          {
            title: "Three Crescent Beaches",
            description:
              "Lighthouse, Hawah, and Samudra beaches offer distinct moods—from lively promenades to tranquil coves.",
            icon: "🏖️",
          },
          {
            title: "Backwater Cruises",
            description:
              "Short drives lead to Poovar and Neyyar backwaters where private boat safaris glide past mangroves and birdlife.",
            icon: "🛶",
          },
          {
            title: "Spa Culture",
            description:
              "World-class Ayurvedic resorts create bespoke treatment plans combining massages, herbal steams, and yoga.",
            icon: "🌿",
          },
          {
            title: "Fresh Catch Dining",
            description:
              "Beach shacks grill tiger prawns, lobster, and Kerala-style tacos while boutique restaurants offer global menus.",
            icon: "🍤",
          },
          {
            title: "Cultural Excursions",
            description:
              "Day trips to the Padmanabhaswamy Temple and Kuthira Malika Palace in Thiruvananthapuram add a regal touch.",
            icon: "🏰",
          },
        ],
      },
      {
        name: "Kanyakumari",
        slug: "kanyakumari",
        image: kanyakumari,
        description:
          "Where the Arabian Sea, Bay of Bengal, and Indian Ocean meet, Kanyakumari is a soulful coastal retreat filled with sunrise rituals, art legends, and maritime history.",
        facts: [
          {
            title: "Triveni Sangam",
            description:
              "Watch dawn break over the confluence of three seas—an unforgettable spectacle with orange and gold horizons.",
            icon: "🌊",
          },
          {
            title: "Vivekananda Rock",
            description:
              "Take a ferry to the memorial island where Swami Vivekananda meditated in 1892, now a serene meditation spot.",
            icon: "🪔",
          },
          {
            title: "Thiruvalluvar Statue",
            description:
              "The 133-foot statue honours the Tamil poet-saint and offers insight into the region’s literary heritage.",
            icon: "📜",
          },
          {
            title: "Seashell Markets",
            description:
              "Bazaar lanes overflow with polished sea shells, palm candy, and palm-leaf handicrafts crafted by local families.",
            icon: "🐚",
          },
          {
            title: "Coastal Cuisine",
            description:
              "From fish curry meals to banana chips and parotta shacks, every corner reveals coastal comfort food.",
            icon: "🍛",
          },
          {
            title: "Heritage Churches",
            description:
              "Nearby Our Lady of Ransom Church displays Gothic spires and stained glass that glow softly at sunset.",
            icon: "⛪",
          },
        ],
      },
    ],
    []
  );

  const handleDestinationClick = (slug: string) => {
    navigate(`/allvillas?destination=${slug}`);
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          <img 
            src={heroImage} 
            alt="Luxury travel destinations"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-4 drop-shadow-lg">
              Destinations
            </h1>
            <p className="text-lg md:text-xl tracking-wide drop-shadow-lg">
              Choose Where You Want To Go
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-5xl mx-auto text-center">
              Discover the signature destinations we curate across South India.
              From heritage quarters to sun-kissed coasts, every property in our
              portfolio has been personally inspected for service, style, and
              authenticity. Not sure which city suits your travel plans? Speak
              with our villa specialists and we’ll tailor suggestions to your
              dates, group size, and preferred experiences.
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destinations.map((dest) => (
                <div 
                  key={dest.slug}
                  onClick={() => handleDestinationClick(dest.slug)}
                  className="relative overflow-hidden rounded-lg aspect-video group cursor-pointer"
                >
                  <img 
                    src={dest.image} 
                    alt={`${dest.name} luxury villas and chalets`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <h3 className="text-white text-3xl md:text-4xl font-light tracking-wide drop-shadow-lg">
                      {dest.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 md:py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-primary-foreground text-sm md:text-base max-w-3xl">
                We have inspected every detail of each villa listed on our
                website and the services they offer to make sure they meet our
                exacting standards. Contact us and one of our villa specialists
                will be happy to assist in finding the perfect villa according
                to your needs.
              </p>
              <Button 
                variant="outline" 
                className="bg-transparent text-primary-foreground border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary whitespace-nowrap px-8"
              >
                CONTACT US NOW
              </Button>
            </div>
          </div>
        </section>

        {/* Destination Facts Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 tracking-wide">
              Destination Facts & Overview
            </h2>

            {destinations.map((dest, index) => (
              <div
                key={dest.slug}
                className={index === destinations.length - 1 ? "" : "mb-20"}
              >
              <div className="relative h-48 md:h-64 mb-8 rounded-lg overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover"
                  />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center px-4">
                      <h3 className="text-white text-4xl md:text-6xl font-bold tracking-wider drop-shadow-lg uppercase">
                        {dest.name}
                      </h3>
                      <p className="text-white/90 text-xs md:text-sm font-light max-w-3xl mx-auto mt-2">
                        {dest.description}
                      </p>
                    </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {dest.facts.map((fact, factIndex) => (
                    <div
                      key={factIndex}
                      className="flex gap-4 p-6 bg-muted/30 rounded-lg"
                    >
                      <div className="text-3xl md:text-4xl flex-shrink-0">
                        {fact.icon}
              </div>
                    <div>
                        <h4 className="font-semibold mb-2 text-sm md:text-base">
                          {fact.title}
                        </h4>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {fact.description}
                        </p>
                    </div>
                  </div>
                ))}
                    </div>
                  </div>
                ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Destinations;
