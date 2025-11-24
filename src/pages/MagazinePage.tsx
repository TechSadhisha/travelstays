import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import magazineHero from "@/assets/magazine-hero.webp";
import pondicherry from "@/assets/dest-pondicherry.webp";
import madurai from "@/assets/dest-madurai.webp";
import trichy from "@/assets/dest-trichy.webp";
import varkala from "@/assets/dest-varkala.webp";
import kanyakumari from "@/assets/dest-kanyakumari.webp";
import featuredVilla from "@/assets/featured-villa.webp";
import awardBadge from "@/assets/award-badge.webp";

const MagazinePage = () => {
  const articles = [
    {
      date: "November 7, 2025",
      title: "Pondicherry in 48 Hours: Cafés, Culture & Coastal Drives",
      excerpt:
        "Follow our two-day itinerary through White Town boulevards, artisan studios, and seaside promenades to savour the best of Pondicherry’s French-Tamil charm.",
      category: "PONDICHERRY TRAVEL GUIDE",
      image: pondicherry,
    },
    {
      date: "November 5, 2025",
      title: "Madurai After Dark: Temple Rituals & Night Markets",
      excerpt:
        "Witness evening ceremonies at Meenakshi Amman Temple, taste jasmine-infused tea, and browse lively bazaars that keep Madurai glowing past sunset.",
      category: "MADURAI TRAVEL GUIDE",
      image: madurai,
    },
    {
      date: "October 30, 2025",
      title: "Trichy Riverfront Retreats for Slow Travelers",
      excerpt:
        "From Rockfort panoramas to Cauvery boat rides, discover how to slow down in Tiruchirappalli with boutique stays and heritage excursions.",
      category: "TRICHY TRAVEL GUIDE",
      image: trichy,
    },
    {
      date: "October 23, 2025",
      title: "Wellness Weekending in Varkala & Kovalam",
      excerpt:
        "Plan an indulgent getaway across Kerala’s twin beach towns with Ayurvedic rituals, yoga retreats, and cliffside brunch spots worth lingering over.",
      category: "KERALA WELLNESS",
      image: varkala,
    },
    {
      date: "October 22, 2025",
      title: "Chasing Sunrises at India’s Southern Tip",
      excerpt:
        "Kanyakumari’s Triveni Sangam, lighthouse sunsets, and coastal cuisine make it an evocative finale to any South India itinerary.",
      category: "KANYAKUMARI TRAVEL GUIDE",
      image: kanyakumari,
    }
  ];

  const topics = [
    "Pondicherry Travel Guide",
    "Madurai Travel Guide",
    "Trichy Travel Guide",
    "Kerala Beach Escapes",
    "Kovalam Wellness",
    "Kanyakumari Experiences",
    "Culture & Tradition",
    "Food & Travel",
    "Travel Guide & Inspiration",
    "Villa Owners Guide",
    "Villa Rentals Guide",
  ];

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${magazineHero})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-light mb-4">The Magazine</h1>
            <p className="text-xl md:text-2xl font-light">Read stories and more...</p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr_350px] gap-12">
              {/* Articles Grid */}
              <div>
                <div className="space-y-12">
                  {articles.map((article, index) => (
                    <article key={index} className="group">
                      <div className="relative overflow-hidden rounded-lg mb-6 aspect-[16/10]">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{article.date}</p>
                      <h2 className="text-3xl font-semibold mb-3 leading-tight group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-2">By: The Luxury Signature</p>
                      <p className="text-xs tracking-wider text-muted-foreground mb-4">{article.category}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <Button variant="outline" className="border-2 border-foreground hover:bg-foreground hover:text-background">
                        READ MORE
                      </Button>
                    </article>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Search */}
                <div className="relative">
                  <Input 
                    placeholder="Search..." 
                    className="pr-12 h-12 border-2"
                  />
                  <Button 
                    size="icon" 
                    className="absolute right-0 top-0 h-12 w-12 bg-foreground hover:bg-foreground/90"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </div>

                {/* Featured Villa */}
                <div className="bg-primary/5 rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={featuredVilla} 
                      alt="Villa Amaravida & Beyond"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-6 text-center">
                      <p className="text-xs tracking-widest mb-2">CURATED HERITAGE COLLECTION</p>
                      <h3 className="text-2xl font-bold text-center mb-4">
                        Boutique Villas<br />Across South India
                      </h3>
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
                        EXPLORE NOW
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Need Help Booking */}
                <div className="bg-foreground text-background p-8 rounded-lg text-center">
                  <p className="text-xs tracking-widest mb-2">BOOK DIRECT WITH US</p>
                  <p className="text-xs tracking-wider mb-4">GET BEST AVAILABLE RATES</p>
                  <h3 className="text-3xl font-bold mb-4">NEED HELP<br />BOOKING?</h3>
                  <p className="text-xs tracking-wider mb-2">OUR VILLA SPECIALISTS</p>
                  <p className="text-xs tracking-wider mb-6">CAN HELP FIND THE PERFECT<br />VILLA FOR YOU</p>
                  <Button variant="outline" className="border-2 border-background text-background hover:bg-background hover:text-foreground">
                    SEND ENQUIRY
                  </Button>
                </div>

                {/* Topics */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Topics from Magazine</h3>
                  <div className="space-y-3">
                    {topics.map((topic, index) => (
                      <button 
                        key={index}
                        className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Award Badge */}
                <div className="flex justify-center py-6">
                  <img 
                    src={awardBadge} 
                    alt="Luxury Lifestyle Awards Winner 2024"
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MagazinePage;