import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StaysInFocus from "@/components/StaysInFocus";
import FeaturedIn from "@/components/FeaturedIn";
import GuestReviews from "@/components/GuestReviews";
import Destinations from "@/components/Destinations";
import Magazine from "@/components/Magazine";
import Footer from "@/components/Footer";

import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Travel Stays - Luxury Villas & Chalets"
        description="Discover the finest collection of luxury villas and chalets in Phuket, Bali, Koh Samui, Niseko, Megève, and Courchevel. Personalized 5-star vacation experiences."
      />
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "TravelStays World",
              "url": "https://travelstays.world",
              "description": "Hotel recommendations across India including luxury, premium and budget hotels.",
              "logo": "https://travelstays.world/logo.png"
            }
          `}
        </script>
      </Helmet>
      <TopBar />
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StaysInFocus />
        <FeaturedIn />
        <GuestReviews />
        <Destinations />
        <Magazine />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
