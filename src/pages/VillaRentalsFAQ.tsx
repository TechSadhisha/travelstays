import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Palmtree, HandPlatter, HelpCircle, Calendar, CreditCard } from "lucide-react";

const VillaRentalsFAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-[50vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="flex items-center justify-center mb-4">
            <Palmtree className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide drop-shadow-lg">
            Villa Rentals FAQ
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wider drop-shadow-md">
            Frequently Asked Questions
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            To help you understand why villas are the perfect choice for a private, comfortable, and luxurious holiday, here are the <strong>Frequently Asked Questions</strong> on the general information on villas and the standard operating procedures. Whether it's your first time to book a private villa rental for your holiday or your first time to book with <em>Travel Stays</em>, these FAQ's will serve as your basic guide to pursuing a luxury vacation to your dream destination. <em>Stay at a villa once and you'll never look at hotels the same way again.</em>
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          
          {/* General Questions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <HelpCircle className="w-10 h-10 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">GENERAL QUESTIONS</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold">What is a villa?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  A villa is a private luxury residence, typically featuring multiple bedrooms, living spaces, a private pool, and dedicated staff. Unlike hotels, villas offer complete privacy and personalized service in an exclusive setting.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold">Why choose a villa over a hotel?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Villas offer unparalleled privacy, space, and flexibility. You have an entire property to yourself, personalized service, your own pool, and the freedom to create your own schedule. It's perfect for families, groups, or anyone seeking a more intimate and luxurious vacation experience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold">What destinations do you offer?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer luxury villas across India's most sought-after destinations including Pondicherry, Madurai, Trichy, Varkala, Kovalam, Kanyakumari, and more. Each location is carefully selected for its unique appeal and quality accommodations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Reservation & Booking Support */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <Calendar className="w-10 h-10 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">RESERVATION & BOOKING SUPPORT</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold">How do I make a reservation?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You can make a reservation by browsing our properties, selecting your desired villa, choosing your dates, and submitting an inquiry through our website. Our team will respond promptly to confirm availability and guide you through the booking process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold">What is the minimum stay requirement?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Most villas require a minimum 3-night stay. During peak seasons (Christmas, New Year), the minimum stay is typically 7-10 days. For holidays like Easter, the minimum is usually 5 days. Requirements may vary by property.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold">Can I modify my reservation?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Modifications are subject to availability and our cancellation policies. Please contact our team as soon as possible if you need to make changes to your reservation. Fees may apply depending on the timing of the modification.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Bookings & Payments */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <CreditCard className="w-10 h-10 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">BOOKINGS & PAYMENTS</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold">What payment methods do you accept?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We accept bank transfers, credit cards, and other secure payment methods. Full payment details will be provided upon booking confirmation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold">When is payment due?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  For bookings less than 6 months in advance, a 50% deposit is due within 5 days of booking. For bookings more than 6 months in advance, 25% is due within 5 days, with another 25% due 6 months before arrival. The remaining balance is typically due 30 days before check-in.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold">What is your cancellation policy?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Cancellations made 45+ days before arrival may receive credit for future bookings. Cancellations within 45 days typically result in forfeiture of payments, though partial refunds may be possible if we can rebook the property. Please refer to our Terms & Conditions for complete details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold">Is a security deposit required?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, a security deposit is required and will be authorized on your credit card 48 hours before arrival or can be paid by bank transfer 10 days before arrival. It will be released within 48 hours after checkout, minus any charges for damages or extra services.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Amenities & Facilities */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <Palmtree className="w-10 h-10 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">AMENITIES & FACILITIES</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold">What amenities are included?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Amenities vary by property but typically include private pools, fully equipped kitchens, air conditioning, WiFi, entertainment systems, and outdoor living spaces. Specific amenities are listed on each property page.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold">Is WiFi available?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, most of our villas offer complimentary WiFi. However, please note that in some remote locations, internet speeds may vary. Specific connectivity details are available for each property.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold">Are the villas child-friendly?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Many of our villas are family-friendly and can accommodate children. Some properties offer amenities like cribs, high chairs, and pool safety features. Please inquire about specific child-friendly amenities when booking.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Staff & Services */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <HandPlatter className="w-10 h-10 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">STAFF & SERVICES</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold">Is staff included with my villa rental?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, most villas include dedicated staff service from 7 AM to 10 PM. Staff typically includes housekeeping, maintenance, and sometimes a chef or butler, depending on the property.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold">Can I request a private chef?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Many of our villas offer private chef services, either included or available for an additional fee. The chef can prepare meals based on your preferences and dietary requirements. Please inquire when booking.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold">Are additional services available?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we can arrange additional services such as airport transfers, spa treatments, babysitting, drivers, and special event planning. These services are subject to availability and additional charges.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-semibold">What are the check-in and check-out times?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Standard check-in time is 3:00 PM and check-out is 12:00 PM, unless other arrangements have been made. Early arrivals or late departures are subject to availability and may incur additional fees.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VillaRentalsFAQ;
