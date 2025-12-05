import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeaturedIn from "@/components/FeaturedIn";
import GuestReviews from "@/components/GuestReviews";
import { Sparkles, Shield, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const aboutHero =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2940&auto=format&fit=crop";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutHero})` }}
          >
            <div className="absolute inset-0 bg-luxury-ocean/40"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-3 sm:mb-4">
              About Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl tracking-wide">
              What We Do
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <p className="text-foreground/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              Thank you for choosing Travel Stays as your guide to finding the
              best luxury private villa rentals and holiday homes in Asia and
              Europe. We are proud and excited to welcome you to our incredible
              villas and chalets. Our highly skilled team is dedicated to our
              customers and our business and will be glad to take every measure
              possible to assist and accommodate.
            </p>
            <p className="text-foreground/90 text-sm sm:text-base md:text-lg leading-relaxed">
              Travel Stays is keenly aware of the needs and wants of villa
              renters, as well as villa owners and every dynamic of the villa
              rental business. Everyone in our team is uniquely equipped to deal
              with every aspect of the process, and our fantastic staff is
              always willing to go the extra mile to get the most out of your
              experience. We are invested in the notion that efficient,
              consistent, ethical, and quality performance will build lasting
              relationships between our guests, villa owners and every member of
              our team and network.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 tracking-wide">
                  OUR MISSION
                </h2>
                <p className="text-sm sm:text-base text-foreground/90 mb-4 sm:mb-6 leading-relaxed">
                  At Travel Stays, our mission is to bring delight, lasting
                  memories, and a sense of elevated lifestyle to every guest
                  through exceptional, personalized villa experiences.
                </p>
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                  Through a steadfast commitment to integrity, customer service,
                  and excellence, we aim to surpass expectations, offering only
                  the highest quality accommodations and tailored services that
                  cater to the distinct preferences of every guest – all to
                  create meaningful moments that reflect the art of living well,
                  every single time.
                </p>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 tracking-wide">
                  OUR VISION
                </h2>
                <p className="text-sm sm:text-base text-foreground/90 mb-4 sm:mb-6 leading-relaxed">
                  For Travel Stays to become the benchmark and embodiment of
                  true luxury in the global villa rental market.
                </p>
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                  We envision a world where discerning travelers seek more than
                  just accommodation — they seek meaning, connection, and
                  unforgettable moments. By curating only the most exceptional
                  private villas and delivering service rooted in integrity,
                  passion, and excellence, Travel Stays aims to become
                  synonymous with refined living and bespoke experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Finest Villa Rental Collection */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-center mb-6 sm:mb-8 tracking-wide">
              FINEST VILLA RENTAL COLLECTION
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed mb-6 sm:mb-8">
              A full-service luxury villa rental company with the highest form
              of standards, Travel Stays provides every discerning traveler with
              a first-class selection of luxury villas and vacation homes to
              rent. Never compromising quality, each villa is an incredible
              experience in opulence, comfort, and privacy, with modern
              facilities and a highly capable in-house staff with a majority
              featuring world-class chefs and dedicated concierge available to
              attend to every needs and desire.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed">
              Our portfolio of luxury villas represents Travel Stays' unyielding
              dedication to excellence. From hundreds of possible selections in
              each location, only the best villas are chosen to present to our
              elite clientele – the finest in villa design, features &
              amenities, location, staffing, as well as service and experience
              it offers. Every villa is unique in architecture, design,
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-2xl"
                src="https://www.youtube.com/embed/35npVaFGHMY"
                title="Travel Stays - Live the Extraordinary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
              {/* Best Direct Rates */}
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-foreground text-background flex items-center justify-center">
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                    Best Direct Rates Guarantee
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    Travel Stays acts as the Direct Representative of most
                    villas listed in our portfolio. We offer the best rates
                    available for all direct bookings. Our villa owners
                    entrusted to us all transactions including contracts and
                    rates negotiation, availability, and the terms & conditions
                    of the villa.
                  </p>
                </div>
              </div>

              {/* 100% Secure Booking */}
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-foreground text-background flex items-center justify-center">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                    100% Secure Booking
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    Take comfort and peace of mind in your booking experience.
                    We offer an optional booking insurance that covers up to
                    US$20,000. Every aspect of the booking procedure has been
                    carefully attended to, with care for your experience and
                    finances firmly in mind.
                  </p>
                </div>
              </div>

              {/* Personalized Concierge */}
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-foreground text-background flex items-center justify-center">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                    Personalized Concierge
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    Maybe you need a car, a tour guide, or a yacht to charter?
                    Perhaps a relaxing whole body massage poolside, tickets to
                    the best show in town, or a private yoga and pilates
                    session, no request is too big or too small for our
                    dedicated, personalized concierge service which is included
                    in every villa.
                  </p>
                </div>
              </div>

              {/* Speedy Response */}
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-foreground text-background flex items-center justify-center">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                    Speedy Response
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    We take great pride in our customer service. If you want to
                    make a reservation, or just have some questions, our
                    dedicated Villa Specialists, and Luxury Travel Experts are
                    available 24/7 to respond swiftly and ensure you receive the
                    assistance you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured In */}
        <FeaturedIn />

        {/* Guest Reviews */}
        <GuestReviews />

        {/* We Go The Extra Mile */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 md:mb-12">
              We go the extra mile...
            </h2>
            <p className="text-sm sm:text-base text-foreground/90 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
              We understand the needs of a luxury traveler. Our commitment to
              making every customer travel experience all it can be, truly makes
              Travel Stays experience stand out from the rest. Never waste time
              or money after finding your accommodations to be less than
              suitable, or your vacation poorly planned. We understand how
              precious your time is, and we take every possible measure to
              realize your vacation goals and dreams.
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                  No Hidden Charges
                </h3>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  We don't like any hidden details! Everything is transparent:
                  no hidden membership fees, no sneaky charges in the fine
                  print. Our prices are up front: never pay an extra cent.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                  Personalized Information Tailored To Our Guests Needs
                </h3>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  Everyone's ideal vacation is different. To account for that,
                  we don't just sell the same prepackaged experience to all of
                  our guests. We go to great lengths to offer dedicated
                  concierge service, a trained expert who can customize your
                  vacation experience to the exact details of your luxury dream
                  vacation. All you have to do is ask, and we shall do our best
                  to provide.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                  We Personally and Thoroughly Inspect Each Villa We List
                </h3>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  Every single villa featured on our website has been personally
                  inspected and carefully hand-picked with an exacting detail to
                  attention. If for any reason, a villa does not meet the
                  standards of our experts, you will never see us advertising
                  it! Rest assured that what you see is what you get.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-foreground text-background py-10 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 max-w-6xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg text-center md:text-left">
                We have inspected every detail of each villa listed on our
                website and the services they offer to make sure they meet our
                exacting standards. Contact us and one of our villa specialists
                will be happy to assist in finding the perfect villa according
                to your needs.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="flex-shrink-0 border-2 border-background text-background hover:bg-background hover:text-foreground text-sm sm:text-base w-full md:w-auto"
                asChild
              >
                <Link to="/contact-us">CONTACT US NOW</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
