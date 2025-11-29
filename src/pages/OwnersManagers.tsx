import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import heroImage from "@/assets/property_images/kanyakumari/the_coral.webp"; // Using a placeholder, ideally use the uploaded image

const OwnersManagers = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <TopBar />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroImage})` }} // Ideally use uploaded_image_4
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide shadow-sm">
            Owners & Managers
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wider shadow-sm">
            Work With Us
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-8">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            For something so grand, a luxury villa rental can be hard to market and book. With potential guests spread far and wide, getting the message out can be a real challenge. With all the hassle of advertising, marketing, and handling the booking, as well as the payment process, it can be an overwhelming experience for villa owners and managers.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            To make the most out of your villa rental, Travel Stays will guide you through the entire process of marketing and renting your villa. A full-service rental company, we act on behalf of villa owners to manage the marketing, advertising, booking, and reservations. Our team is uniquely equipped to manage and advise villa owners on every aspect of renting a luxury villa.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2 tracking-wide text-gray-900">WHAT WE OFFER</h2>
            <p className="text-muted-foreground text-sm">We help reach your rental goal</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            {/* Marketing & Advertising */}
            <div>
              <h3 className="text-xl font-medium mb-8 tracking-wide text-gray-800 uppercase">MARKETING & ADVERTISING</h3>
              <ul className="space-y-4 text-sm text-muted-foreground list-disc pl-5 marker:text-gray-400">
                <li>Production & preparation of marketing materials such as high-quality professional photos, videos, 360 tours, and more.</li>
                <li>Website Design for your luxury villa including management & maintenance</li>
                <li>Paid Advertising setup & management such as Google Adwords (PPC), Facebook Ads, and more</li>
                <li>Search Engine Optimization (SEO) including content creation and marketing</li>
                <li>Social Media Marketing & Management</li>
                <li>Luxury Magazine publishing & advertising</li>
                <li>Email Marketing & more</li>
              </ul>
            </div>

            {/* Bookings & Reservations */}
            <div>
              <h3 className="text-xl font-medium mb-8 tracking-wide text-gray-800 uppercase">BOOKINGS & RESERVATIONS</h3>
              <ul className="space-y-4 text-sm text-muted-foreground list-disc pl-5 marker:text-gray-400">
                <li>Bookings & Reservations management</li>
                <li>Email & Phone support for guests</li>
                <li>Handling of Payment</li>
                <li>Transparent monthly reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Criteria Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2 tracking-wide text-gray-900">OUR CRITERIA</h2>
            <p className="text-muted-foreground text-sm">What we need from you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-10">
              <div>
                <h4 className="font-bold text-sm tracking-wide text-gray-900 mb-3 uppercase">LIVE AVAILABILITY CALENDAR & SEASONAL RATE</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The live availability calendar is an essential element for the booking process, making it easy for anyone to see on the fly when reservations are available. The calendar not only improves efficiency, it helps produce more revenue and increase productivity. We find it essential that our clients feature a live availability calendar as part of their services.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-wide text-gray-900 mb-3 uppercase">CLEAR HIGH-RESOLUTION PHOTOS</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To highlight the very best features of your villa, we require extremely professional, quality, high-resolution images to feature on our website. Quality photography is essential to market anything, but especially in the villa market. If you lack in quality photos, don't despair: we will be happy to direct you to photography services.
                </p>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h4 className="font-bold text-sm tracking-wide text-gray-900 mb-3 uppercase">THE DETAILS</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Our commitment to excellence extends to every aspect of the villa. For new clients, we will begin by visiting your villa for an exacting inspection by our Villa Specialists. We take a look at the villas overall design, the details of the interior as well as the amenities and facilities it offers. Also, we take into account the standards of maintenance and staff services.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This is just a brief synopsis of everything the Villa Specialists will be looking out but gives you an idea of our approach.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-wide text-gray-900 mb-3 uppercase">INSPECTION STAY</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every villa is carefully selected, handpicked by our experts for its unique appeal and quality experience. To select only the best, we conduct an inspection stay, where one of our specialists immerses themselves in the experience offered by your villa to get a first-hand look at all of the comforts, amenities and services provided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Reviews Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 tracking-wide text-gray-900">OWNER REVIEWS</h2>
            <p className="text-muted-foreground text-sm">What our villa owners say about Travel Stays</p>
          </div>

          <blockquote className="text-sm md:text-base text-muted-foreground italic leading-relaxed mb-8">
            "As a Villa Owner, until recently I wanted to sincerely thank you for the support and contribution Travel Stays has provided me based on the exclusive mandate you had to market and rent my property. I have to say that I have been extremely pleased on several accounts. You have proven to be true professionals highly versed into online marketing and understanding how to capture market potential. I felt that you had my interest at heart while making sure that the client would have a pleasant experience, hence le level of repeat business. By having a small consistent portfolio of truly luxury properties you avoided diluting the value of my asset by putting it alongside much cheaper properties that do not compare. I sincerely wish you all the best and would be pleased to recommend you to other villa owners."
          </blockquote>
          <cite className="text-sm font-bold text-gray-900 not-italic">- Thierry L. (Villa Owner)</cite>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl">
            <p className="text-sm md:text-base leading-relaxed text-gray-300">
              Travel Stays is always seeking out new partnership with villa owners and luxury properties that match our standard, with no upfront cost and no subscription fee. Our clever strategy and commitment to excellence are sure to get results.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-sm tracking-widest uppercase transition-colors whitespace-nowrap"
            onClick={() => window.location.href = '/contact-us'}
          >
            Contact Us Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OwnersManagers;
