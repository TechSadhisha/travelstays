import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

const AgentsResources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide drop-shadow-lg">
            Agents Resources
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wider drop-shadow-md">
            Request Marketing Materials
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-sm md:prose-base max-w-none space-y-6">
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              <span className="text-amber-600 font-semibold">Travel Stays</span>{" "}
              is constantly looking for partners and agents worldwide to work
              with. We offer attractive commission to interested qualified
              parties who would like to advertise our premium collection of
              luxury stays in Phuket, Bali, and Koh Samui, to offer to their
              clientele. Please{" "}
              <a
                href="/contact-us"
                className="text-amber-600 hover:text-amber-700 underline"
              >
                Contact Us
              </a>{" "}
              to register as an official partner of Travel Stays.
            </p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              The marketing materials and other resources of all of our luxury
              stays listed in this website such as the high resolution images,
              videos, floor plans, and descriptions are available for download
              and use to our registered agents only.
            </p>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              An updated{" "}
              <a
                href="#"
                className="text-amber-600 hover:text-amber-700 underline"
              >
                Availability Calendar
              </a>{" "}
              is also available to all agents.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl">
            <p className="text-sm md:text-base leading-relaxed text-gray-300">
              Interested to become one of our agents? We offer attractive
              commission rates for both new and established agents with a focus
              on high-end properties and luxury travel. Contact us to register
              as an official partner of Travel Stays.
            </p>
          </div>
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-sm tracking-widest uppercase transition-colors whitespace-nowrap"
            onClick={() => (window.location.href = "/contact-us")}
          >
            Contact Us Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgentsResources;
