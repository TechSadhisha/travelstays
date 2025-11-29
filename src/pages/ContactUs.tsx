import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] flex items-center justify-center overflow-hidden">
          {/* Ocean background with blur effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#40E0D0] via-[#20B2AA] to-[#008B8B]">
            {/* Additional layers for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#008B8B]/50 to-transparent"></div>
            <div className="absolute inset-0 backdrop-blur-[2px] bg-white/5"></div>
            {/* Wave effects */}
            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-white/30 via-white/15 to-transparent"></div>
            <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-white/20 to-transparent"></div>
            <div className="absolute bottom-0 w-full h-1/6 bg-gradient-to-t from-white/10 to-transparent"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4 sm:px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-3 md:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)]">
              Get In Touch
            </p>
          </div>
        </section>

        {/* Contact Information and Form Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            {/* Introduction Text */}
            <div className="mb-8 md:mb-12">
              <p className="text-foreground/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                For questions and other inquiries regarding our products and services, please complete the form below and submit. One of our villa specialists or team members will attend to your query shortly. For any urgent requests, please call us at{" "}
                <a href="tel:+91 9087776509" className="text-primary hover:underline font-medium">
                  +91 9087776509

                </a>
                .
              </p>
              <div className="flex items-center gap-2 sm:gap-3 text-foreground/90">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/85257428838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors text-sm sm:text-base md:text-lg"
                >
                  <span>WhatsApp: +91 9087776509</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm sm:text-base">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter Email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm sm:text-base">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="95852 30000"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* City */}
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-sm sm:text-base">City</Label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="Your City"
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message or additional comments here..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="w-full resize-none min-h-[120px]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto min-w-[200px] bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base"
                  >
                    SUBMIT
                  </Button>
                </div>
              </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;

