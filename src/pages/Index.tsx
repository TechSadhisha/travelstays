import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import VillasInFocus from "@/components/VillasInFocus";
import FeaturedIn from "@/components/FeaturedIn";
import GuestReviews from "@/components/GuestReviews";
import Destinations from "@/components/Destinations";
import Magazine from "@/components/Magazine";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <VillasInFocus />
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
