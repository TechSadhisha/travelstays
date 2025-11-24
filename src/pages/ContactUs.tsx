import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    country: "",
    communicationChannel: "",
    message: "",
    consent: false,
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
                <a href="tel:+85224354898" className="text-primary hover:underline font-medium">
                  +852 2435 4898
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
                  <span>WhatsApp: +852 5742 8838</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm sm:text-base">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm sm:text-base">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">
                    Email <span className="text-destructive">*</span>
                  </Label>
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
                  <Label htmlFor="phone" className="text-sm sm:text-base">
                    Phone <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+66 000 00000000"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Subject/Name of villa or chalet */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm sm:text-base">Subject/Name of villa or chalet:</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Enter subject or villa name"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Country of Residence */}
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-sm sm:text-base">
                    Country of Residence <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) => handleChange("country", value)}
                    required
                  >
                    <SelectTrigger id="country" className="w-full">
                      <SelectValue placeholder="-Select-" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hongkong">Hong Kong</SelectItem>
                      <SelectItem value="singapore">Singapore</SelectItem>
                      <SelectItem value="thailand">Thailand</SelectItem>
                      <SelectItem value="indonesia">Indonesia</SelectItem>
                      <SelectItem value="malaysia">Malaysia</SelectItem>
                      <SelectItem value="japan">Japan</SelectItem>
                      <SelectItem value="south-korea">South Korea</SelectItem>
                      <SelectItem value="china">China</SelectItem>
                      <SelectItem value="taiwan">Taiwan</SelectItem>
                      <SelectItem value="philippines">Philippines</SelectItem>
                      <SelectItem value="vietnam">Vietnam</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="new-zealand">New Zealand</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="france">France</SelectItem>
                      <SelectItem value="switzerland">Switzerland</SelectItem>
                      <SelectItem value="germany">Germany</SelectItem>
                      <SelectItem value="italy">Italy</SelectItem>
                      <SelectItem value="spain">Spain</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Preferred Communication Channel */}
              <div className="space-y-2">
                <Label htmlFor="communicationChannel" className="text-sm sm:text-base">
                  Preferred Communication Channel <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.communicationChannel}
                  onValueChange={(value) => handleChange("communicationChannel", value)}
                  required
                >
                  <SelectTrigger id="communicationChannel" className="w-full">
                    <SelectValue placeholder="-Select-" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="sms">SMS</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Message/Comments */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm sm:text-base">Additional Message/Comments:</Label>
                <Textarea
                  id="message"
                  placeholder="Type your message or additional comments here..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full resize-none min-h-[120px]"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start space-x-3 pt-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleChange("consent", checked as boolean)}
                  className="mt-1 flex-shrink-0"
                />
                <Label
                  htmlFor="consent"
                  className="text-xs sm:text-sm leading-relaxed cursor-pointer text-foreground/80"
                >
                  I agree to receive exclusive offers, newsletters, and WhatsApp updates from The Luxury Signature. I understand I can unsubscribe at any time.
                </Label>
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

